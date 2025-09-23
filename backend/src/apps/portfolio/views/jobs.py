from rest_framework import viewsets, mixins, permissions

from src.apps.accounts.permissions import APIKeyHasPermission
from src.apps.portfolio.serializers import JobListSerializer, JobRetrieveSerializer
from src.apps.portfolio.services.db import get_all_jobs, get_user_jobs


class JobViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
):
    queryset = get_all_jobs()
    permission_classes = (permissions.IsAuthenticated, APIKeyHasPermission)
    serializer_class = JobListSerializer
    serializer_classes = {"list": JobListSerializer, "retrieve": JobRetrieveSerializer}

    def get_queryset(self):
        return get_user_jobs(user=self.request.user)

    def get_serializer_class(self):
        return self.serializer_classes.get(self.action, self.serializer_class)
