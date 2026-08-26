from fastapi import APIRouter
from app.api.v1.router import api_router as v1_router

root_router = APIRouter()

# Include version 1 API endpoints under the '/v1' prefix
root_router.include_router(v1_router, prefix="/v1")
