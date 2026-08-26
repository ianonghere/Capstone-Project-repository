import re
from fastapi import APIRouter, HTTPException, BackgroundTasks
from typing import List, Dict, Any, Optional
from app.core.audit import (
    AuditLogCreate,
    AuditLogUpdate,
    create_audit_entry,
    update_audit_entry,
    get_audit_entry,
    get_all_audit_logs,
)

router = APIRouter()


def extract_email(sender: str) -> str:
    """Helper to parse email address from a From header (e.g. Name <email>)."""
    match = re.search(r"<(.*?)>", sender)
    if match:
        return match.group(1).strip()
    return sender.strip()


@router.post(
    "/",
    summary="Create Audit Entry",
    description="Initializes an audit log record when an AI draft response is generated.",
    response_model=Dict[str, Any],
)
async def create_log(log: AuditLogCreate):
    try:
        entry = create_audit_entry(log)
        return entry
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to create audit entry: {str(e)}"
        )


@router.put(
    "/{session_id}",
    summary="Update Audit Entry & Feedback",
    description="Updates the audit entry with final response text, feedback rating, and comments once approved or discarded.",
    response_model=Dict[str, Any],
)
async def update_log(
    session_id: str, update: AuditLogUpdate, background_tasks: BackgroundTasks
):
    # Verify entry exists
    entry = get_audit_entry(session_id)
    if not entry:
        raise HTTPException(status_code=404, detail="Audit session not found")

    try:
        updated_entry = update_audit_entry(session_id, update)

        # If status is approved, trigger SMTP mail dispatch in background
        if update.status == "approved":
            from app.core.email_sender import send_email_reply

            sender_raw = entry.get("sender") or ""
            recipient = extract_email(sender_raw)
            subject = entry.get("subject") or "Inquiry reply"
            body = update.edited_response or entry.get("generated_draft") or ""

            if recipient and body and "@" in recipient:
                background_tasks.add_task(send_email_reply, recipient, subject, body)
                print(f"[API] Queued SMTP dispatch to {recipient} in background tasks.")

        return updated_entry
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to update audit entry: {str(e)}"
        )


@router.get(
    "/{session_id}", summary="Get Single Audit Entry", response_model=Dict[str, Any]
)
async def get_log(session_id: str):
    entry = get_audit_entry(session_id)
    if not entry:
        raise HTTPException(status_code=404, detail="Audit session not found")
    return entry


@router.get(
    "/",
    summary="Get All Audit Logs",
    description="Returns a paginated list of all audit logs for review and model optimization.",
    response_model=List[Dict[str, Any]],
)
async def get_logs(limit: int = 100, offset: int = 0):
    try:
        logs = get_all_audit_logs(limit=limit, offset=offset)
        return logs
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to fetch audit logs: {str(e)}"
        )
