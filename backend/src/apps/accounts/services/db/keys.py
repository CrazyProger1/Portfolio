from src.apps.accounts.models import APIKey
from src.apps.accounts.services.crypto import hash_api_key
from src.utils.django.orm.shortcuts import get_object_or_none


def get_key_or_none(**data) -> APIKey | None:
    return get_object_or_none(APIKey, **data)


def get_current_api_key(request) -> APIKey | None:
    raw_key = request.auth
    hashed_key = hash_api_key(raw_key=raw_key)
    return get_key_or_none(hashed_key=hashed_key)
