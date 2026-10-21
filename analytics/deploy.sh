#!/bin/bash

set -e

# Docker is rootless on the server: talk to the admin user's daemon
export DOCKER_HOST=unix:///run/user/1001/docker.sock

cd /home/admin/portfolio/analytics/ || exit

git checkout -- deploy.sh

git pull

test -f .env || { echo ".env is missing - copy .env.sample to .env and fill it in"; exit 1; }

docker compose pull

docker compose up --detach
