from rest_framework import (
    viewsets,
    mixins,
    permissions,
    response,
    status,
)
from rest_framework.decorators import action

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.accounts.serializers import (
    UserListSerializer,
    UserRetrieveSerializer,
)
from src.apps.accounts.services.db import get_all_users


class UsersViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    queryset = get_all_users()
    serializer_class = UserListSerializer
    serializer_classes = {
        "list": UserListSerializer,
        "retrieve": UserRetrieveSerializer,
        "me": UserRetrieveSerializer,
    }
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)

    def get_object(self):
        if self.action == "me":
            return self.request.user

        return super().get_object()

    @action(detail=False, methods=["GET"], url_path="me")
    def me(self, request):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return response.Response(serializer.data, status=status.HTTP_200_OK)
