#!/bin/bash

set -e

cd /home/admin/portfolio/backend/ || exit

git checkout -- deploy.sh

git pull

docker compose up --build --detach
