from django.db import models
from django.utils.translation import gettext_lazy as _


class Client(models.Model):
    ip = models.GenericIPAddressField(
        verbose_name=_("IP"),
        help_text=_("IP address of the client."),
        unique=True,
        db_index=True,
        blank=False,
        null=False,
    )
    user_agent = models.TextField(
        verbose_name=_("user agent"),
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = _("Client")
        verbose_name_plural = _("Clients")

    def __str__(self):
        return self.ip
