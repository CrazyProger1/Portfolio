import datetime

from django.db import models

from src.apps.metrics.models import Metric, MetricRecord
from src.utils.django.orm.shortcuts import create_object, get_all_objects


def increment_metric(metric: Metric, user=None) -> MetricRecord:
    metric.value += 1
    metric.save()
    return create_object(
        source=MetricRecord,
        metric=metric,
        user=user,
    )


def get_all_metrics() -> models.QuerySet[Metric]:
    return get_all_objects(source=Metric)
