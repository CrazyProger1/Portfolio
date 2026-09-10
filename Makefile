.DEFAULT_GOAL := dev

LOG := /tmp/portfolio-dev.log
BACKEND_PORT ?= 8010
FRONTEND_PORT ?= 3000

.PHONY: dev
dev:
	@echo "Starting backend and frontend..."
	@echo "Log: $(LOG)"
	@test -f backend/.env || { echo "backend/.env is missing - copy backend/.env.sample to backend/.env and fill it in"; exit 1; }
	@test -d backend/.venv || { echo "backend/.venv is missing - run 'cd backend && uv sync'"; exit 1; }
	@test -d frontend/node_modules || { echo "frontend/node_modules is missing - run 'cd frontend && npm ci'"; exit 1; }
	@trap 'kill 0' INT; \
	(cd backend && PYTHONUNBUFFERED=1 .venv/bin/python manage.py runserver 0.0.0.0:$(BACKEND_PORT) 2>&1 | stdbuf -oL sed 's/^/[backend]  /' | tee -a $(LOG)) & \
	(cd frontend && npm run dev -- --port $(FRONTEND_PORT) 2>&1 | stdbuf -oL sed 's/^/[frontend] /' | tee -a $(LOG)) & \
	wait
