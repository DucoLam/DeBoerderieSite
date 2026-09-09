"""Health check endpoint."""
from fastapi import APIRouter

router = APIRouter()


@router.get("/", tags=["Health"])
def health_check():
    """Health check endpoint."""
    return {"status": "ok"}
