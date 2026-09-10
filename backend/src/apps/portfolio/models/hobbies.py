from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from src.utils.django.orm import UpdatedAtMixin, CreatedAtMixin


class HobbyTag(models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        help_text=_("The name of the hobby tag (eg hiking, photography, etc)."),
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

    class Meta:
        verbose_name = _("Hobby Tag")
        verbose_name_plural = _("Hobby Tags")

    def __str__(self):
        return self.name


class Hobby(CreatedAtMixin, UpdatedAtMixin, models.Model):
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="hobbies",
    )
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    description = models.TextField(
        verbose_name=_("description"),
        help_text=_("Markdown description shown in the hobby modal."),
        null=False,
        blank=False,
    )
    started_at = models.DateTimeField(
        verbose_name=_("started at"),
        default=timezone.now,
        null=False,
        blank=False,
    )
    ended_at = models.DateTimeField(
        verbose_name=_("ended at"),
        null=True,
        blank=True,
    )
    tags = models.ManyToManyField(
        to="HobbyTag",
        related_name="hobbies",
        verbose_name=_("tags"),
        blank=True,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="hobbies/",
        null=False,
        blank=False,
    )
    priority = models.PositiveSmallIntegerField(
        default=0,
        verbose_name=_("priority"),
        help_text=_("The priority of the hobby shown on the portfolio page."),
        null=False,
        blank=False,
    )

    class Meta:
        verbose_name = _("Hobby")
        verbose_name_plural = _("Hobbies")

    def __str__(self):
        return self.name
