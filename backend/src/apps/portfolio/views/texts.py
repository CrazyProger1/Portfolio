from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, mixins, permissions

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.portfolio.filters import TextBlockFilter
from src.apps.portfolio.serializers import (
    TextBlockRetrieveSerializer,
    TextBlockListSerializer,
)
from src.apps.portfolio.services.db import get_user_text_blocks


class TextBlockViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = TextBlockListSerializer
    serializer_classes = {
        "list": TextBlockListSerializer,
        "retrieve": TextBlockRetrieveSerializer,
    }
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TextBlockFilter
    lookup_field = "slug"

    def get_queryset(self):
        return get_user_text_blocks(user=self.request.user)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)
