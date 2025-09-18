from rest_framework import serializers

from src.apps.portfolio.models import Link


class LinkListSerializer(serializers.ModelSerializer):
    platform = serializers.CharField(
        source="platform.name",
        read_only=True,
    )

    class Meta:
        model = Link
        fields = "__all__"


class LinkRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = "__all__"
