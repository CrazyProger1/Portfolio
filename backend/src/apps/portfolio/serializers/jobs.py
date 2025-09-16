from rest_framework import serializers

from src.apps.portfolio.models import Job


class JobListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            "user",
            "name",
            "description",
            "started_at",
            "ended_at",
            "image",
        )


class JobRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = (
            "user",
            "name",
            "description",
            "started_at",
            "ended_at",
            "image",
        )
