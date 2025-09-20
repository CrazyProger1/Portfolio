#!/bin/bash

set -e

cd /home/admin/portfolio/frontend/ || exit

git checkout -- deploy.sh

git stash

git pull

npm install

npm run build