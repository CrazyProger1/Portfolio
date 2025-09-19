from django.db import models
from django.utils.translation import gettext_lazy as _


class Platform(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    slug = models.SlugField(
        max_length=100,
        verbose_name=_("slug"),
        unique=True,
        blank=False,
        null=False,
    )
    description = models.TextField(
        verbose_name=_("description"),
        null=True,
        blank=True,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="platforms/",
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = _("Platform")
        verbose_name_plural = _("Platforms")

    def __str__(self):
        return self.name
