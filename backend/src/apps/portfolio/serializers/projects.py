from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from src.apps.portfolio.models import Project
from src.apps.portfolio.serializers import (
    SkillRetrieveSerializer,
    AreaRetrieveSerializer,
)
from src.apps.portfolio.serializers.links import (
    LinkRetrieveSerializer,
)
from src.apps.portfolio.services.db import (
    get_user_skills_from_skills,
    get_project_metrics,
)


class ProjectListSerializer(serializers.ModelSerializer):
    metrics = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = "__all__"

    def get_metrics(self, obj: Project):
        return get_project_metrics(project=obj)


class ProjectRetrieveSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()
    areas = AreaRetrieveSerializer(many=True)
    links = LinkRetrieveSerializer(many=True)
    metrics = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = "__all__"

    @extend_schema_field(SkillRetrieveSerializer(many=True))
    def get_skills(self, obj: Project):
        request = self.context.get("request")
        queryset = get_user_skills_from_skills(request.user, obj.skills.all())
        return SkillRetrieveSerializer(queryset, many=True).data

    def get_metrics(self, obj: Project):
        return get_project_metrics(project=obj)
