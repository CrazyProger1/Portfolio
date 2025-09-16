import hashlib
import secrets

from django.conf import settings


def generate_api_key():
    return secrets.token_urlsafe(settings.API_KEY_LENGTH)


def hash_api_key(raw_key: str):
    return hashlib.sha256(raw_key.encode()).hexdigest()
