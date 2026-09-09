"""Application factory."""
from .core.config import settings
from .db.database import engine, Base
from .api.v1.api import api_router
from fastapi import FastAPI

def create_application() -> FastAPI:
    application = FastAPI(
        title=settings.APP_NAME,
        version=settings.VERSION,
        description=settings.DESCRIPTION,
    )
    application.include_router(api_router, prefix=settings.API_V1_STR)
    return application
