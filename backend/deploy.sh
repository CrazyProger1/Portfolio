#!/bin/bash

set -e

cd /home/admin/portfolio/backend/ || exit

git checkout -- deploy.sh

git pull

uv sync

#poetry run python manage.py makemigrations
uv run python manage.py migrate
uv run python manage.py collectstatic --noinput

supervisorctl restart portfolio-backend
