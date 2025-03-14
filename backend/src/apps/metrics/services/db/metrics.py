from src.apps.metrics.models import Metric, MetricRecord
from src.utils.django.orm.shortcuts import create_object


def increment_metric(metric: Metric, user=None) -> MetricRecord:
    metric.value += 1
    metric.save()
    return create_object(
        source=MetricRecord,
        metric=metric,
        user=user,
    )
