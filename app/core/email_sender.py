import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import settings


def send_email_reply(to_email: str, subject: str, body: str) -> bool:
    """
    Connects to the SMTP server and sends a reply email to the student.

    Args:
        to_email (str): Recipient email address.
        subject (str): The subject line of the email.
        body (str): The text content of the reply body.

    Returns:
        bool: True if sent successfully, False otherwise.
    """
    try:
        msg = MIMEMultipart()
        msg["From"] = f"{settings.APP_NAME} <{settings.EMAIL_ADDRESS}>"
        msg["To"] = to_email

        # Ensure subject has "RE:" prefix for replies
        if not subject.strip().lower().startswith("re:"):
            subject = f"RE: {subject.strip()}"
        msg["Subject"] = subject

        # Attach text message
        msg.attach(MIMEText(body, "plain", "utf-8"))

        # Connect to SMTP server
        server = smtplib.SMTP(
            settings.EMAIL_SMTP_SERVER, settings.EMAIL_SMTP_PORT, timeout=15
        )
        server.starttls()
        server.login(settings.EMAIL_ADDRESS, settings.EMAIL_PASSWORD)
        server.sendmail(settings.EMAIL_ADDRESS, to_email, msg.as_string())
        server.quit()
        print(f"Successfully sent email to {to_email}")
        return True
    except Exception as e:
        print(f"Failed to send email to {to_email}: {e}")
        return False
