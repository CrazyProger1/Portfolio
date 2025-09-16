import re

from rest_framework import permissions

from src.apps.accounts.services.db import get_current_api_key


class IsNotAPIKey(permissions.BasePermission):
    def has_permission(self, request, view):
        return not getattr(request, "is_api_key_authenticated", None)

    def has_object_permission(self, request, view, obj):
        return not getattr(request, "is_api_key_authenticated", None)


class APIKeyHasPermission(permissions.BasePermission):
    message = "API Key has no permission to perform this action"

    def has_permission(self, request, view):
        if getattr(request, "is_api_key_authenticated", None):
            api_key = get_current_api_key(request=request)
            path = request.path

            for permission in api_key.permissions.all():
                if re.fullmatch(permission.url_regex, path):
                    return not permission.readonly or (
                            permission.readonly and request.method in permissions.SAFE_METHODS
                    )

            return False
        return True

    def has_object_permission(self, request, view, obj):
        return self.has_permission(request=request, view=view)
