from django.db import models
from django.utils.translation import gettext_lazy as _


class MetricGoal(models.Model):
    name = models.CharField(
        max_length=150,
        null=False,
        blank=False,
        verbose_name=_("name"),
        help_text=_("Goal name."),
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name=_("description"),
        help_text=_("Goal description."),
    )
    metric = models.ForeignKey(
        to="Metric",
        on_delete=models.CASCADE,
        related_name="goals",
        verbose_name=_("metric"),
        help_text=_("Parent metric."),
        null=False,
        blank=False,
    )
    value = models.PositiveBigIntegerField(
        null=False,
        blank=False,
        default=0,
        verbose_name=_("goal"),
        help_text=_("Goal value."),
    )

    class Meta:
        verbose_name = _("Goal")
        verbose_name_plural = _("Goals")

    def __str__(self):
        return f"{self.metric}: {self.value}"
