from decouple import config, Csv

from src.config.settings.base import INSTALLED_APPS, MIDDLEWARE

INSTALLED_APPS += ["corsheaders"]
MIDDLEWARE.insert(
    MIDDLEWARE.index("django.middleware.common.CommonMiddleware") - 1,
    "corsheaders.middleware.CorsMiddleware",
)

CORS_ALLOWED_ORIGINS = config(
    "CORS_ALLOWED_ORIGINS",
    cast=Csv(),
    default=["*"],
)
CORS_ALLOW_ALL_ORIGINS = config(
    "CORS_ALLOW_ALL_ORIGINS",
    cast=bool,
    default=False,
)
