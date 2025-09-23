from pathlib import Path
from decouple import config, Csv

APPLICATION = "Portfolio"
DESCRIPTION = "Portfolio for Full Stack Developer"
VERSION = "0.0.2"

SITE_URL = config("SITE_URL", cast=str, default="http/localhost:8000")

BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent
BASE_URL = config("BASE_URL", cast=str, default="http://localhost:8000")
SECRET_KEY = config("SECRET_KEY", cast=str)
DEBUG = config("DEBUG", cast=bool, default=False)
ALLOWED_HOSTS = config("ALLOWED_HOSTS", cast=Csv(), default=["*"])

INSTALLED_APPS = [
    "modeltranslation",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django_filters",
    "src.apps.docs",
    "src.apps.accounts",
    "src.apps.metrics",
    "src.apps.portfolio",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "src.config.web.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "src.config.web.wsgi.application"
ASGI_APPLICATION = "src.config.web.asgi.application"
STATIC_URL = config("STATIC_URL", default="static/")
STATIC_ROOT = BASE_DIR / config("STATIC_ROOT", default="static/")
MEDIA_URL = config("MEDIA_URL", default="media/")
MEDIA_ROOT = BASE_DIR / config("MEDIA_ROOT", default="media/")
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
