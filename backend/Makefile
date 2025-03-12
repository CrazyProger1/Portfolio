.PHONY: cleancode
cleancode:
	poetry run black .
	poetry run mypy .

.PHONY: run
run:
	poetry run python manage.py runserver


.PHONY: db.migrations
db.migrations:
	poetry run python manage.py makemigrations


.PHONY: db.migrate
db.migrate:
	poetry run python manage.py migrate


.PHONY: db.superuser
db.superuser:
	poetry run python manage.py createsuperuser --no-input

