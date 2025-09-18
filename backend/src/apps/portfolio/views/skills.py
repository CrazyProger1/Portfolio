from rest_framework import viewsets, mixins, permissions

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.portfolio.serializers import SkillListSerializer, SkillRetrieveSerializer
from src.apps.portfolio.services.db import get_all_user_skills, get_user_skills


class SkillViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    queryset = get_all_user_skills()
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = SkillListSerializer
    serializer_classes = {
        "list": SkillListSerializer,
        "retrieve": SkillRetrieveSerializer,
    }

    def get_queryset(self):
        return get_user_skills(user=self.request.user)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)
