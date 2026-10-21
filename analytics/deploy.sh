#!/bin/bash

set -e

cd /home/admin/portfolio/analytics/ || exit

git checkout -- deploy.sh

git pull

test -f .env || { echo ".env is missing - copy .env.sample to .env and fill it in"; exit 1; }

docker compose pull

docker compose up --detach
