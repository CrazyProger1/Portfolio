from django.db import models

from src.apps.metrics.models import MetricGoal, Metric


def get_user_goals(metric: Metric, user) -> models.QuerySet[MetricGoal]:
    return metric.goals.filter(user=user)
