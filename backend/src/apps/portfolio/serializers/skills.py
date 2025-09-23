from rest_framework import serializers

from src.apps.portfolio.models import UserSkill


class SkillListSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source="skill.id")
    name = serializers.CharField(source="skill.name")
    image = serializers.CharField(source="skill.image")

    class Meta:
        model = UserSkill
        fields = (
            "id",
            "name",
            "image",
            "level",
        )


class SkillRetrieveSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source="skill.id")
    name = serializers.CharField(source="skill.name")
    image = serializers.CharField(source="skill.image")

    class Meta:
        model = UserSkill
        fields = (
            "id",
            "name",
            "image",
            "level",
        )
