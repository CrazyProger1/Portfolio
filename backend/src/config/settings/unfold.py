from src.config.settings.base import INSTALLED_APPS

INSTALLED_APPS = [
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.inlines",
    "unfold.contrib.import_export",
    "unfold.contrib.guardian",
    "unfold.contrib.simple_history",
    *INSTALLED_APPS,
]

UNFOLD = {
    "SITE_TITLE": "Urbanaut-API",
    "SITE_HEADER": "Urbanaut-API",
    "SITE_URL": "/docs",
    "SITE_SYMBOL": "speed",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "THEME": "dark",
}
