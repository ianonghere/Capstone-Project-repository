from fastapi import APIRouter
from app.api.v1.endpoints import health, query, audit

api_router = APIRouter()

# Register the health router under the prefix '/health' and categorize it with a system tag
api_router.include_router(health.router, prefix="/health", tags=["system"])

# Register the copilot query router under '/query'
api_router.include_router(query.router, prefix="/query", tags=["copilot"])

# Register the audit logging router under '/audit'
api_router.include_router(audit.router, prefix="/audit", tags=["audit"])
