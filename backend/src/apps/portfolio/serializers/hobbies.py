from rest_framework import serializers

from src.apps.portfolio.models import Hobby, HobbyTag


class HobbyTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = HobbyTag
        fields = "__all__"


class HobbyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = (
            "id",
            "user",
            "name",
            "description",
            "started_at",
            "ended_at",
            "image",
        )


class HobbyRetrieveSerializer(serializers.ModelSerializer):
    tags = HobbyTagSerializer(many=True)

    class Meta:
        model = Hobby
        fields = (
            "id",
            "user",
            "name",
            "description",
            "started_at",
            "ended_at",
            "image",
            "tags",
        )
