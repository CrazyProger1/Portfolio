import logging

from drf_spectacular.extensions import OpenApiAuthenticationExtension
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

from src.apps.accounts.services.crypto import hash_api_key
from src.apps.accounts.services.db import get_key_or_none

logger = logging.getLogger(__name__)


class APIKeyAuthentication(BaseAuthentication):
    HEADER_KEYWORD = "apikey"

    def get_auth_header(self, request) -> str | None:
        return request.headers.get("Authorization", None)

    def validate_header(self, header) -> bool:
        if not header:
            return False

        if not header.lower().startswith(self.HEADER_KEYWORD + " "):
            return False

        return True

    def get_api_key(self, header: str):
        return header.split(" ", maxsplit=1)[1]

    def get_user(self, key: str):
        hashed_key = hash_api_key(raw_key=key)
        api_key = get_key_or_none(hashed_key=hashed_key)
        if api_key:
            return api_key.user

    def authenticate(self, request):
        header = self.get_auth_header(request=request)

        if not self.validate_header(header=header):
            return None

        logger.debug("Trying to authenticate user...")

        key = self.get_api_key(header=header)

        user = self.get_user(key=key)

        if not user:
            logger.warning("User associated with api key (%s) not found", key)
            raise AuthenticationFailed(detail="Failed to authenticate user by api key")

        logger.debug("User successfully authenticated: %s", user)

        request.is_api_key_authenticated = True
        return user, key


class APIKeyAuthenticationScheme(OpenApiAuthenticationExtension):
    target_class = APIKeyAuthentication
    name = "API Key Authentication"
    priority = -1

    def get_security_definition(self, auto_schema):
        return {
            "type": "apiKey",
            "in": "header",
            "name": "Authorization",
        }
