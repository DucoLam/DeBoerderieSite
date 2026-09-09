"""Main application entry point."""
import uvicorn
from app.core.config import settings
from app import create_application


def main():
    """Run the application."""
    uvicorn.run(
        "app:create_application",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
    )


if __name__ == "__main__":
    main()
