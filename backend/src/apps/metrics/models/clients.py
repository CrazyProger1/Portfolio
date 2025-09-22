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
