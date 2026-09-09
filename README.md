# De Boerderie

A full-stack application with UV Backend (FastAPI), Bun Frontend (React), and Docker containerization.

## Tech Stack

- **Backend**: Python 3.11, FastAPI, SQLAlchemy, UV package manager
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, i18next
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

## Project Structure

```
.
├── backend/              # FastAPI backend
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/     # API routes
│   │   │   ├── core/    # Core configuration
│   │   │   ├── db/      # Database connection
│   │   │   ├── models/  # SQLAlchemy models
│   │   │   ├── schemas/ # Pydantic schemas
│   │   │   └── utils/   # Utility functions
│   │   └── main.py      # Application entry point
│   └── pyproject.toml   # UV dependencies
├── frontend/            # React frontend
│   ├── src/
│   │   ├── App.tsx      # Main application
│   │   ├── i18n.ts      # i18n configuration
│   │   └── main.tsx     # Entry point
│   └── package.json     # Bun/npm dependencies
├── docker/              # Docker configurations
├── i18n/                # Internationalization files
├── .env                 # Environment variables
├── .env.example         # Environment variables template
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile.backend   # Backend Docker image
├── Dockerfile.frontend  # Frontend Docker image
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16+

### Local Development

#### Backend

```bash
cd backend
uv sync
uv run uvicorn app.main:main --reload
```

#### Frontend

```bash
cd frontend
bun install
bun run dev
```

### Docker

```bash
docker-compose up --build
```

Or run individual services:
```bash
docker-compose up -d db          # Start database only
docker-compose up -d backend     # Start backend only
docker-compose up -d frontend    # Start frontend only
docker-compose down -v           # Stop and remove all containers
docker-compose logs -f           # View logs
```

**Note:** On Windows, `just` requires `sh` to be installed. You can either:
1. Install MSYS2: `winget install msys2.MSYS2`
2. Use `docker-compose` directly (recommended)

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `DATABASE_URL`: PostgreSQL connection string
- `SECRET_KEY`: Secret key for JWT tokens
- `DEBUG`: Enable/disable debug mode
- `CORS_ORIGINS`: Allowed frontend origins

## Internationalization

The app defaults to Dutch (nl) but supports English (en). Translations are stored in the `i18n/` directory. Code comments and variable names remain in English, while user-facing text displays in Dutch. Add new languages by creating JSON files with the same structure.

## License

MIT
