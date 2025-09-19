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
    slug = models.SlugField(
        max_length=250,
        verbose_name=_("slug"),
        unique=True,
        null=False,
        blank=False,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="work-areas/",
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name
