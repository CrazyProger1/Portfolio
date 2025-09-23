from rest_framework import serializers
from rest_framework.reverse import reverse

from src.apps.accounts.models import User


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
        )


class UserRetrieveSerializer(serializers.ModelSerializer):
    actions = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "actions",
        )

    def get_actions(self, obj: User):
        request = self.context.get("request")
        return {
            "skills": {
                "list": reverse(
                    "skills-list",
                    request=request,
                ),
                "detail": reverse(
                    "skills-detail",
                    kwargs={"pk": "pk"},
                    request=request,
                ),
            },
            "jobs": {
                "list": reverse(
                    "jobs-list",
                    request=request,
                ),
                "detail": reverse(
                    "jobs-detail",
                    kwargs={"pk": "pk"},
                    request=request,
                ),
            },
            "projects": {
                "list": reverse(
                    "projects-list",
                    request=request,
                ),
                "detail": reverse(
                    "projects-detail",
                    kwargs={"pk": "pk"},
                    request=request,
                ),
            },
        }
