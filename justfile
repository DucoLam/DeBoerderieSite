# Full stack
dev:
    docker-compose up --build

# Individual services
db:
    docker-compose up -d db

api:
    docker-compose up -d backend

frontend:
    docker-compose up -d frontend

# Management
down:
    docker-compose down -v

stop:
    docker-compose stop

logs:
    docker-compose logs -f

# Alias for dev
up:
    docker-compose up --build
