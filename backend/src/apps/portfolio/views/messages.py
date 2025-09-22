from rest_framework import viewsets, mixins, permissions

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.metrics.services.db import increment_metric_safe
from src.apps.portfolio.enums import Metric
from src.apps.portfolio.serializers import (
    MessageCreateSerializer,
)
from src.apps.portfolio.services.db import get_all_messages


class MessageViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
):
    queryset = get_all_messages()
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = MessageCreateSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        increment_metric_safe(
            metric=Metric.MESSAGE,
            request=self.request,
        )
