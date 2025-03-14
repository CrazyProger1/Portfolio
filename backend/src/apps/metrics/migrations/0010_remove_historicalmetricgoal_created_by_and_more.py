# Generated by Django 5.1.7 on 2025-03-14 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("metrics", "0009_historicalmetric_historicalmetricgoal"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="historicalmetricgoal",
            name="created_by",
        ),
        migrations.RemoveField(
            model_name="historicalmetricgoal",
            name="history_user",
        ),
        migrations.RemoveField(
            model_name="historicalmetricgoal",
            name="metric",
        ),
        migrations.RemoveField(
            model_name="historicalmetricgoal",
            name="updated_by",
        ),
        migrations.DeleteModel(
            name="HistoricalMetric",
        ),
        migrations.DeleteModel(
            name="HistoricalMetricGoal",
        ),
    ]
