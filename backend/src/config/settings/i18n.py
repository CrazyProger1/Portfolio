from decouple import config
from django.utils.translation import gettext_lazy as _

from src.config.settings.base import BASE_DIR

LANGUAGE_CODE = config("LANGUAGE_CODE", cast=str, default="en-us")

TIME_ZONE = config("TIME_ZONE", cast=str, default="UTC")

USE_I18N = True

USE_L10N = True

USE_TZ = True

LANGUAGES = [
    ("en", _("English")),
]

LOCALE_PATHS = [
    BASE_DIR.joinpath("locales"),
]
