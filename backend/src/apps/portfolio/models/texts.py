from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _


class TextBlock(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    slug = models.SlugField(
        null=False,
        blank=False,
        unique=True,
        db_index=True,
        verbose_name=_("slug"),
        help_text=_("Text block slug key."),
    )
    content = models.TextField(
        verbose_name=_("content"),
        blank=False,
        null=False,
    )
    collections = models.ManyToManyField(
        to="Collection",
        verbose_name=_("collections"),
        help_text=_("Collections the text belongs to (eg footer, header, project)."),
        blank=True,
        related_name="texts",
    )
    priority = models.PositiveSmallIntegerField(
        default=0,
        verbose_name=_("priority"),
        help_text=_("The priority of the link shown on the portfolio page."),
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="texts",
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="texts/",
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = _("Text Block")
        verbose_name_plural = _("Text Blocks")

    def __str__(self):
        return self.name
