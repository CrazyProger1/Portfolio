from rest_framework import serializers

from src.apps.portfolio.models import Platform


class PlatformListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = (
            "id",
            "name",
        )
