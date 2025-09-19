from rest_framework import viewsets, mixins, permissions
from rest_framework.response import Response

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.portfolio.serializers import (
    ProjectListSerializer,
    ProjectRetrieveSerializer,
)
from src.apps.portfolio.services.db import get_all_projects, get_user_projects


class ProjectViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    queryset = get_all_projects()
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = ProjectListSerializer
    serializer_classes = {
        "list": ProjectListSerializer,
        "retrieve": ProjectRetrieveSerializer,
    }

    def get_queryset(self):
        return get_user_projects(user=self.request.user)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)
