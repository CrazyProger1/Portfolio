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
    image = models.ImageField(
        upload_to="portfolio-metrics/",
        verbose_name=_("image"),
        null=True,
        blank=True,
    )
    platform = models.ForeignKey(
        to="Platform",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("platform"),
        help_text=_("The platform that metric belongs to."),
        related_name="metrics",
    )

    class Meta:
        verbose_name = _("Metric")
        verbose_name_plural = _("Metrics")

    def __str__(self):
        return self.slug
