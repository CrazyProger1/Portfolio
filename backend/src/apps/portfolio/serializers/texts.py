from rest_framework import serializers

from src.apps.portfolio.models import UserSkill, TextBlock


class TextBlockListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextBlock
        fields = (
            "name",
            "slug",
            "content",
        )


class TextBlockRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextBlock
        fields = (
            "name",
            "slug",
            "content",
        )
