from datetime import datetime, timezone
from fastapi import APIRouter
from app.config import settings

router = APIRouter()


@router.get("", summary="Get service health status")
def check_health():
    """
    Performs a basic health check and returns metadata about the API instance,
    including the active application name, environment status, and current timestamp.
    """
    return {
        "status": "healthy",
        "app_name": settings.APP_NAME,
        "environment": settings.APP_ENV,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
