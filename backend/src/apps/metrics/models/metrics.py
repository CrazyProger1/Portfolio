from django.db import models
from django.utils.translation import gettext_lazy as _


class Metric(models.Model):
    slug = models.SlugField(
        null=False,
        blank=False,
        unique=True,
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
    value = models.PositiveBigIntegerField(
        null=False,
        blank=False,
        default=0,
        verbose_name=_("value"),
        help_text=_("Metric value."),
    )

    class Meta:
        verbose_name = _("Metric")
        verbose_name_plural = _("Metrics")

    def __str__(self):
        return self.slug
