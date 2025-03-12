from src.config.settings.base import INSTALLED_APPS
from src.config.settings.base import (
    APPLICATION,
    DESCRIPTION,
    VERSION,
)

INSTALLED_APPS += ["drf_spectacular"]
SPECTACULAR_SETTINGS = {
    "TITLE": APPLICATION,
    "DESCRIPTION": DESCRIPTION,
    "VERSION": VERSION,
    "SERVE_INCLUDE_SCHEMA": False,
}
