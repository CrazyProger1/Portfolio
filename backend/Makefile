.PHONY: clean
clean:
	uvx  black .
	uvx mypy .

.PHONY: run
run:
	uvx python manage.py runserver


.PHONY: db.migrations
db.migrations:
	uvx python manage.py makemigrations


.PHONY: db.migrate
db.migrate:
	uvx python manage.py migrate


.PHONY: db.superuser
db.superuser:
	uvx python manage.py createsuperuser --no-input

