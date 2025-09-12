from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _


class Metric(models.Model):
    slug = models.SlugField(
        null=False,
        blank=False,
        verbose_name=_("slug"),
        help_text=_("Metric slug key."),
    )
    name = models.CharField(
        max_length=150,
        null=False,
        blank=False,
        verbose_name=_("name"),
        help_text=_("Metric name."),
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name=_("description"),
        help_text=_("Metric description."),
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="metrics",
        verbose_name=_("user"),
        help_text=_("User associated with this metric."),
    )

    class Meta:
        verbose_name = _("Metric")
        verbose_name_plural = _("Metrics")

    def __str__(self):
        return self.slug
