from src.config.settings.base import INSTALLED_APPS

INSTALLED_APPS += [
    "rest_framework",
    "drf_standardized_errors",
]

REST_FRAMEWORK = {
    "EXCEPTION_HANDLER": "drf_standardized_errors.handler.exception_handler",
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 100,
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
}
