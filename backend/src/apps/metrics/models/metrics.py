import uuid

from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.django.orm import MetadataMixin, CreatedAtMixin


class Metric(MetadataMixin, models.Model):
    slug = models.SlugField(
        null=False,
        blank=False,
        unique=True,
        verbose_name=_("slug"),
        help_text=_("Metric slug key.")
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


class MetricRecord(CreatedAtMixin, models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name=_("id"),
        help_text=_("Primary key of the metric record."),
    )
    metric = models.ForeignKey(
        to=Metric,
        on_delete=models.CASCADE,
        related_name="records",
        verbose_name=_("metric"),
        help_text=_("Parent metric."),
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="metric_records",
        verbose_name=_("user"),
        help_text=_("User associated with this record."),
    )

    class Meta:
        verbose_name = _("Record")
        verbose_name_plural = _("Records")

    def __str__(self):
        return f"{self.metric}: {self.created_at}"
