from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from src.utils.django.orm import UpdatedAtMixin, CreatedAtMixin


class Link(CreatedAtMixin, models.Model):
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="links",
    )
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    link = models.URLField(
        verbose_name=_("link"),
        null=False,
        blank=False,
    )
    description = models.TextField(
        verbose_name=_("description"),
        null=True,
        blank=True,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="links/",
        null=True,
        blank=True,
    )
    platform = models.ForeignKey(
        to="Platform",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("platform"),
        help_text=_("The platform that link belongs to."),
        related_name="links",
    )
    priority = models.PositiveSmallIntegerField(
        default=0,
        verbose_name=_("priority"),
        help_text=_("The priority of the link shown on the portfolio page."),
        null=False,
        blank=False,
    )

    class Meta:
        verbose_name = _("Link")
        verbose_name_plural = _("Links")

    def __str__(self):
        return self.name
