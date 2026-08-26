import time
import imaplib
import email
from email.header import decode_header
import threading
import uuid
from typing import Optional, Tuple
from app.config import settings
from app.core.orchestrator import generate_response
from app.core.audit import AuditLogCreate, create_audit_entry

# Global control flags for the thread worker
_worker_running = False
_worker_thread: Optional[threading.Thread] = None


def get_email_body(msg) -> str:
    """Recursively walks through multipart message structures to extract raw text content."""
    if msg.is_multipart():
        for part in msg.walk():
            ctype = part.get_content_type()
            cdisp = str(part.get("Content-Disposition"))
            if ctype == "text/plain" and "attachment" not in cdisp:
                payload = part.get_payload(decode=True)
                if payload:
                    return payload.decode("utf-8", errors="ignore")
    else:
        payload = msg.get_payload(decode=True)
        if payload:
            return payload.decode("utf-8", errors="ignore")
    return ""


def parse_sender(sender_raw: str) -> Tuple[str, str]:
    """Parses name and email address from RFC 822 From header."""
    if "<" in sender_raw and ">" in sender_raw:
        parts = sender_raw.split("<")
        name = parts[0].strip().replace('"', "").replace("'", "")
        email_addr = parts[1].replace(">", "").strip()
        return name or "Student", email_addr
    return "Student", sender_raw.strip()


def decode_mime_header(header_value: Optional[str]) -> str:
    """Decodes mime headers dynamically handling character encodings."""
    if not header_value:
        return ""
    decoded_parts = decode_header(header_value)
    header_str = ""
    for text, encoding in decoded_parts:
        if isinstance(text, bytes):
            try:
                header_str += text.decode(encoding or "utf-8", errors="ignore")
            except Exception:
                header_str += text.decode("utf-8", errors="ignore")
        else:
            header_str += text
    return header_str


def check_and_process_emails():
    """Connects to the IMAP server, queries unread messages, runs RAG auto-drafting, and saves to SQLite."""
    if not settings.EMAIL_ADDRESS or not settings.EMAIL_PASSWORD:
        return

    try:
        # Establish IMAP SSL connection
        mail = imaplib.IMAP4_SSL(settings.EMAIL_IMAP_SERVER, settings.EMAIL_IMAP_PORT)
        mail.login(settings.EMAIL_ADDRESS, settings.EMAIL_PASSWORD)
        mail.select("inbox")

        # Query all UNSEEN emails
        status, messages = mail.search(None, "UNSEEN")
        if status != "OK":
            mail.logout()
            return

        email_ids = messages[0].split()
        if not email_ids:
            mail.logout()
            return

        print(
            f"[Email Worker] Connected to IMAP. Found {len(email_ids)} unread email(s) to process."
        )

        for e_id in email_ids:
            # Fetch message payload
            status, msg_data = mail.fetch(e_id, "(RFC822)")
            if status != "OK":
                continue

            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])

                    # Safely decode Subject & From headers
                    subject = decode_mime_header(msg.get("Subject", "No Subject"))
                    sender_full = decode_mime_header(msg.get("From", "Unknown"))

                    body = get_email_body(msg).strip()
                    if not body:
                        body = "[Empty Email Content]"

                    print(
                        f"[Email Worker] Processing mail from '{sender_full}' - Subject: '{subject}'"
                    )

                    # Execute the RAG pipeline automatically on the email payload
                    try:
                        session_id = str(uuid.uuid4())
                        result = generate_response(
                            query=body, top_k=3, subject=subject, sender=sender_full
                        )

                        confidence = result["confidence"]
                        pre_approved = confidence >= 60

                        # Insert record into database
                        create_audit_entry(
                            AuditLogCreate(
                                session_id=session_id,
                                query=body,
                                generated_draft=result["draft_body"],
                                subject=subject,
                                sender=sender_full,
                                draft_subject=result["draft_subject"],
                                confidence=confidence,
                                pre_approved=pre_approved,
                                channel="email",
                            )
                        )
                        print(
                            f"[Email Worker] Created initial RAG draft log entry under Session ID: {session_id}"
                        )
                    except Exception as ex:
                        print(f"[Email Worker] Failed to run RAG generation: {ex}")

                    # Mark email as read on the mail server to prevent duplicates
                    mail.store(e_id, "+FLAGS", "\\Seen")

        mail.logout()
    except Exception as e:
        print(f"[Email Worker] Connection check run encountered error: {e}")


def _worker_loop():
    """Inner polling loop executing checks sequentially."""
    global _worker_running
    print(
        f"[Email Worker] Worker loop thread initialized. Polling interval: {settings.EMAIL_CHECK_INTERVAL}s."
    )
    while _worker_running:
        check_and_process_emails()
        for _ in range(settings.EMAIL_CHECK_INTERVAL):
            if not _worker_running:
                break
            time.sleep(1)
    print("[Email Worker] Worker loop thread terminated.")


def start_email_worker():
    """Spawns the background email check daemon thread."""
    global _worker_running, _worker_thread
    if _worker_running:
        return
    _worker_running = True
    _worker_thread = threading.Thread(target=_worker_loop, daemon=True)
    _worker_thread.start()


def stop_email_worker():
    """Halts background execution loop and joins worker thread."""
    global _worker_running, _worker_thread
    if not _worker_running:
        return
    _worker_running = False
    if _worker_thread:
        _worker_thread.join(timeout=5)
        _worker_thread = None
