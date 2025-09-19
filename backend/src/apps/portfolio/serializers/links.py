from rest_framework import serializers

from src.apps.portfolio.models import Link


class LinkListSerializer(serializers.ModelSerializer):
    platform = serializers.CharField(
        source="platform.slug",
        read_only=True,
    )

    class Meta:
        model = Link
        fields = "__all__"


class LinkRetrieveSerializer(serializers.ModelSerializer):
    platform = serializers.CharField(
        source="platform.slug",
        read_only=True,
    )

    class Meta:
        model = Link
        fields = "__all__"
