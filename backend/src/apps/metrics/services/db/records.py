from django.db import models

from src.apps.metrics.models import Metric, MetricRecord


def get_user_records(metric: Metric, user) -> models.QuerySet[MetricRecord]:
    return metric.records.filter(user=user)
