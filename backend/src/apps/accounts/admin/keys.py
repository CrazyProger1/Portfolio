from typing import Any

from django.contrib import admin, messages
from django.forms import Form
from django.http import HttpRequest
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.models import APIKey, APIKeyPermission
from src.apps.accounts.services.crypto import generate_api_key, hash_api_key
from src.apps.accounts.sites import site


@admin.register(APIKeyPermission, site=site)
class APIKeyPermissionAdmin(ModelAdmin):
    list_display = (
        "name",
        "url_regex",
    )
    search_fields = ("name",)
    list_display_links = (
        "name",
        "url_regex",
    )


@admin.register(APIKey, site=site)
class APIKeyAdmin(ModelAdmin):
    list_display = (
        "id",
        "name",
        "user",
        "expired_at",
    )
    list_display_links = ("name",)
    search_fields = (
        "name",
        "id",
    )
    list_filter = ("user",)
    readonly_fields = (
        "user",
        "hashed_key",
    )
    autocomplete_fields = ("permissions",)

    def save_model(
        self,
        request: HttpRequest,
        obj: APIKey,
        form: Form,
        change: Any,
    ) -> None:
        if not hasattr(obj, "user"):
            obj.user = request.user

        if not obj.hashed_key:
            raw_key = generate_api_key()
            obj.hashed_key = hash_api_key(raw_key=raw_key)
            messages.warning(
                request=request,
                message=f"You will see your API key ONLY ONCE: {raw_key}",
            )

        super().save_model(
            request,
            obj,
            form,
            change,
        )


class APIKeyInline(TabularInline):
    model = APIKey
    extra = 0
    tab = True
    fields = (
        "name",
        "expired_at",
    )
    show_change_link = True

    def has_add_permission(self, request, obj):
        return False
