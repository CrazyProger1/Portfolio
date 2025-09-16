from rest_framework import viewsets, generics, permissions

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.metrics.serializers import (
    MetricRetrieveSerializer,
    MetricListSerializer,
)
from src.apps.metrics.services.db import get_all_metrics, get_user_metrics


class MetricViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_metrics()
    serializer_classes = {
        "retrieve": MetricRetrieveSerializer,
        "list": MetricListSerializer,
    }
    serializer_class = MetricRetrieveSerializer
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)

    def get_queryset(self):
        return get_user_metrics(user=self.request.user)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)
