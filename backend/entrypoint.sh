#!/bin/bash
set -e

echo "Running migrations..."
uv run python manage.py migrate

echo "Creating superuser..."
uv run python manage.py createsuperuser --no-input || true

if [ "$DEBUG" = "true" ]; then
  echo "Starting Django development server..."
  uv run python manage.py runserver 0.0.0.0:8000
else
  echo "Starting uvicorn server..."
  uv run uvicorn src.config.web.asgi:application --host 0.0.0.0 --port 8000 --log-level debug --workers 4
fi