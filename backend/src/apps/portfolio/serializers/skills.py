from rest_framework import serializers

from src.apps.portfolio.models import Skill


class SkillListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ("id", "name", "image")


class SkillRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ("id", "name", "image")
