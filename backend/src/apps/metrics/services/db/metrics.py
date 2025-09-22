import logging

from django.db import models
from rest_framework.request import Request

from src.apps.metrics.models import Metric, MetricRecord, Client
from src.utils.django.ip import get_client_ip
from src.utils.django.orm.shortcuts import (
    create_object,
    get_all_objects,
    get_object_or_none,
)

logger = logging.getLogger(__name__)


def increment_metric(metric: Metric | str, request: Request, user=None) -> MetricRecord:
    if isinstance(metric, str):
        metric = get_object_or_none(Metric, slug=metric)

        if not metric:
            logger.error("Metric not found: %s", metric)
            raise ValueError(f"Metric not found: {metric}")

    if not user:
        user = request.user

    ip = get_client_ip(request=request)
    client = Client.objects.get_or_create(ip=ip)[0]
    record = create_object(
        source=MetricRecord,
        metric=metric,
        user=user,
        client=client,
    )

    return record


def increment_metric_safe(metric: Metric | str, request: Request, user=None) -> MetricRecord | None:
    try:
        return increment_metric(
            metric=metric,
            request=request,
            user=user,
        )
    except ValueError:
        pass


def get_all_metrics() -> models.QuerySet[Metric]:
    return get_all_objects(source=Metric)


def get_user_metrics(user) -> models.QuerySet[Metric]:
    return Metric.objects.filter(user=user)
