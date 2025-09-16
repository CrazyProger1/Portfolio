from django.db import models
from django.utils.translation import gettext_lazy as _


class WorkArea(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        help_text=_("The name of the job area (eg frontend, backends, etc)."),
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.name
