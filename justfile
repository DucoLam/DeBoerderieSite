[config]
max_jobs = 4
default_channel = "stable"

[env]
DATABASE_URL = "postgresql://user:password@localhost:5432/de_boerderie"
SECRET_KEY = "dev-secret-key-change-in-production"
DEBUG = "True"

[alias]
dev = "up --build -f docker-compose.yml"
db = "up -d db -f docker-compose.yml"
api = "up -d backend -f docker-compose.yml"
frontend = "up -d frontend -f docker-compose.yml"
down = "down -v -f docker-compose.yml"
stop = "stop -f docker-compose.yml"
logs = "logs -f docker-compose.yml"

[project]
name = "De Boerderie"
version = "0.1.0"

[project.tasks]
dev = { cmd = "docker-compose up --build -f docker-compose.yml", description = "Start full stack (backend, frontend, db)" }
db = { cmd = "docker-compose up -d db -f docker-compose.yml", description = "Start database only" }
api = { cmd = "docker-compose up -d backend -f docker-compose.yml", description = "Start backend only" }
frontend = { cmd = "docker-compose up -d frontend -f docker-compose.yml", description = "Start frontend only" }
down = { cmd = "docker-compose down -v -f docker-compose.yml", description = "Stop and remove all containers and volumes" }
stop = { cmd = "docker-compose stop -f docker-compose.yml", description = "Stop containers without removing" }
logs = { cmd = "docker-compose logs -f -f docker-compose.yml", description = "Show logs from all services" }
