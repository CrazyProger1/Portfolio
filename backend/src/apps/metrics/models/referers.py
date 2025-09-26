from django.db import models
from django.utils.translation import gettext_lazy as _


class Referer(models.Model):
    referer = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        unique=True,
        db_index=True,
        verbose_name=_("referer"),
    )

    class Meta:
        verbose_name = _("Referer")
        verbose_name_plural = _("Referers")

    def __str__(self):
        return self.referer
