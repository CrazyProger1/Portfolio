from django.db import models
from django.utils.translation import gettext_lazy as _


class Collection(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    description = models.TextField(
        verbose_name=_("description"),
        null=True,
        blank=True,
    )
    slug = models.SlugField(
        max_length=250,
        verbose_name=_("slug"),
        null=False,
        blank=False,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="collections/",
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = _("Collection")
        verbose_name_plural = _("Collections")

    def __str__(self):
        return self.name
