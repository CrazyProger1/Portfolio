from typing import Any

from django.conf import settings
from django.contrib import admin
from django.db import models
from django.forms import Form
from django.http import HttpRequest
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _


class ImageTagAdminMixin(admin.ModelAdmin):
    image_field = "image"
    tag_short_description = _("image")

    def image_tag(self, obj: models.Model):
        image = getattr(obj, self.image_field, None)

        if image:
            return mark_safe(
                f'<img src="{settings.MEDIA_URL}{image}" width="150" height="150" style="border-radius:10%; object-fit:cover;filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));" />'
            )

    image_tag.short_description = tag_short_description


class OwnerAdminMixin(admin.ModelAdmin):
    owner_field = "user"

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset

        filters = {self.owner_field: request.user}
        return queryset.filter(**filters)

    def save_model(
        self,
        request: HttpRequest,
        obj: models.Model,
        form: Form,
        change: Any,
    ) -> None:
        if not hasattr(obj, self.owner_field):
            setattr(obj, self.owner_field, request.user)

        super().save_model(
            request,
            obj,
            form,
            change,
        )
