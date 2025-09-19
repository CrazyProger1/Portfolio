from rest_framework import viewsets, mixins, permissions

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.portfolio.serializers import LinkListSerializer, LinkRetrieveSerializer
from src.apps.portfolio.services.db import get_user_links


class LinkViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = LinkListSerializer
    serializer_classes = {
        "list": LinkListSerializer,
        "retrieve": LinkRetrieveSerializer,
    }

    def get_queryset(self):
        return get_user_links(
            user=self.request.user
        ).select_related("platform")

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)
