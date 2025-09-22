from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from src.apps.portfolio.models import Job
from src.apps.portfolio.serializers import (
    AreaRetrieveSerializer,
    SkillRetrieveSerializer,
)
from src.apps.portfolio.services.db import get_user_skills_from_skills


class JobListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            "id",
            "user",
            "name",
            "description",
            "started_at",
            "ended_at",
            "image",
        )


class JobRetrieveSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()
    areas = AreaRetrieveSerializer(many=True)

    class Meta:
        model = Job
        fields = (
            "id",
            "user",
            "name",
            "description",
            "started_at",
            "ended_at",
            "image",
            "skills",
            "areas",
        )

    @extend_schema_field(SkillRetrieveSerializer(many=True))
    def get_skills(self, obj: Job):
        request = self.context.get("request")
        queryset = get_user_skills_from_skills(request.user, obj.skills.all())
        return SkillRetrieveSerializer(queryset, many=True).data
