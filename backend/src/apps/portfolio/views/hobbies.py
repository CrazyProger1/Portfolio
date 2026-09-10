from django.db import models
from rest_framework import viewsets, mixins, permissions, serializers

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.portfolio.models import Hobby
from src.apps.portfolio.serializers import HobbyListSerializer, HobbyRetrieveSerializer
from src.apps.portfolio.services.db import get_all_hobbies, get_user_hobbies


class HobbyViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    queryset = get_all_hobbies()
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = HobbyListSerializer
    serializer_classes = {
        "list": HobbyListSerializer,
        "retrieve": HobbyRetrieveSerializer,
    }

    def get_queryset(self) -> models.QuerySet[Hobby]:
        return get_user_hobbies(user=self.request.user)

    def get_serializer_class(self) -> type[serializers.BaseSerializer]:
        return self.serializer_classes.get(self.action, self.serializer_class)
