import re

from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _


class APIKeyPermission(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    url_regex = models.CharField(
        max_length=250,
        verbose_name=_("url regex"),
        null=False,
        blank=False,
    )
    readonly = models.BooleanField(
        default=False,
        verbose_name=_("readonly"),
        null=False,
        blank=False,
    )

    class Meta:
        verbose_name = _("API Key Permission")
        verbose_name_plural = _("API Key Permissions")

    def __str__(self):
        return self.name

    def clean(self):
        super().clean()
        try:
            re.compile(self.url_regex)
        except re.error as e:
            raise ValidationError({"url_regex": _("Invalid regex: %s") % e})


class APIKey(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        help_text=_("Key name."),
        null=False,
        blank=False,
    )
    hashed_key = models.CharField(
        max_length=250,
        verbose_name=_("hashed key"),
        null=True,
        blank=False,
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="keys",
        verbose_name=_("user"),
        help_text=_("User associated with this token."),
    )
    expired_at = models.DateTimeField(
        verbose_name=_("expired at"),
        null=True,
        blank=True,
    )
    permissions = models.ManyToManyField(
        to=APIKeyPermission,
        verbose_name=_("permissions"),
        help_text=_("Defines what this API key is permitted to do."),
        blank=True,
        related_name="keys",
    )

    class Meta:
        verbose_name = _("API Key")
        verbose_name_plural = _("API Keys")

    def __str__(self):
        return self.name
