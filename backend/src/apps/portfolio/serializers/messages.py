from rest_framework import serializers

from src.apps.portfolio.models import Message


class MessageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = (
            "subject",
            "email",
            "message",
        )
