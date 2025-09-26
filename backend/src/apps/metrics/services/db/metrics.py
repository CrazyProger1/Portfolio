import logging
from datetime import timedelta

from django.db import models, transaction
from django.utils import timezone
from rest_framework.request import Request

from src.apps.metrics.models import Metric, MetricRecord, Client, Referer
from src.utils.django.ip import get_client_ip, get_client_referer, get_client_user_agent
from src.utils.django.orm.shortcuts import (
    create_object,
    get_all_objects,
)

logger = logging.getLogger(__name__)


@transaction.atomic
def increment_metric(
        metric: Metric | str,
        request: Request,
        user=None,
        lifespan: timedelta = None,
) -> MetricRecord | None:
    if isinstance(metric, str):
        metric = Metric.objects.select_for_update().filter(slug=metric).first()

        if not metric:
            logger.error("Metric not found: %s", metric)
            raise ValueError(f"Metric not found: {metric}")

    ip = get_client_ip(request=request)
    referer = get_client_referer(request=request)
    user_agent = get_client_user_agent(request=request)
    client = Client.objects.get_or_create(ip=ip)[0]

    if user_agent:
        client.user_agent = user_agent
        client.save(update_fields=("user_agent",))

    if lifespan:
        records = metric.records.filter(
            user=user,
            client=client,
            created_at__gte=timezone.now() - lifespan,
        )
        if records.exists():
            return

    if not user:
        user = request.user

    if referer:
        referer = Referer.objects.get_or_create(referer=referer)[0]

    record = create_object(
        source=MetricRecord,
        metric=metric,
        user=user,
        client=client,
        referer=referer,
    )

    return record


def increment_metric_safe(
        metric: Metric | str,
        request: Request,
        user=None,
        lifespan: timedelta = None,
) -> MetricRecord | None:
    try:
        return increment_metric(
            metric=metric,
            request=request,
            user=user,
            lifespan=lifespan,
        )
    except ValueError:
        pass


def get_all_metrics() -> models.QuerySet[Metric]:
    return get_all_objects(source=Metric)


def get_user_metrics(user) -> models.QuerySet[Metric]:
    return Metric.objects.filter(user=user)
