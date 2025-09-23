from django.contrib import admin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Message


@admin.register(Message, site=site)
class MessageAdmin(ModelAdmin):
    list_display = (
        "subject",
        "is_read",
        "created_at",
    )
    list_display_links = ("subject",)
    list_filter = (
        "is_read",
        "created_at",
    )
    readonly_fields = (
        "user",
        "created_at",
    )
