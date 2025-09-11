import calendar
import datetime
import json
import math

from django.utils import timezone

from src.apps.metrics.enums import GoalPeriod
from src.apps.metrics.models import Metric, MetricGoal

WEEK_MONTH_FACTOR = 4.345
WEEK_YEAR_FACTOR = 52.143


def get_goal_value_for_period(goal: MetricGoal, period: GoalPeriod) -> int:
    """
    Converts a goal value to the requested period.
    Example: if goal=10 per week and period=YEAR, returns ~521.
    """

    if goal.period == period:
        return goal.value

    if goal.period == GoalPeriod.WEEK:
        value_per_week = goal.value
    elif goal.period == GoalPeriod.MONTH:
        value_per_week = goal.value / WEEK_MONTH_FACTOR
    elif goal.period == GoalPeriod.YEAR:
        value_per_week = goal.value / WEEK_YEAR_FACTOR
    else:
        raise ValueError(f"Unsupported goal period: {goal.period}")

    if period == GoalPeriod.WEEK:
        return math.ceil(value_per_week)
    elif period == GoalPeriod.MONTH:
        return math.ceil(value_per_week * WEEK_MONTH_FACTOR)
    elif period == GoalPeriod.YEAR:
        return math.ceil(value_per_week * WEEK_YEAR_FACTOR)

    raise ValueError(f"Unsupported target period: {period}")


def get_last_week_statistics():
    today = datetime.datetime.today()

    week_start = timezone.make_aware(today - datetime.timedelta(days=today.weekday()))
    week_start = week_start.replace(hour=0, minute=0, second=0, microsecond=0)

    statistics = []

    for metric in Metric.objects.all():
        data = []

        for weekday in range(1, today.weekday() + 2):
            data.append(metric.records.filter(
                created_at__week_day=weekday + 1,
                created_at__gt=week_start,
            ).count())

        labels = list(calendar.day_name)
        goals = []

        for goal in metric.goals.all():
            value = get_goal_value_for_period(goal=goal, period=GoalPeriod.WEEK)
            goals.append({
                "label": goal.name,
                "data": [value] * len(labels),
                "borderColor": goal.color,
                "tension": 0.1,
            })

        chart = {
            "name": metric.name,
            "data": json.dumps(
                {
                    "labels": labels,
                    "datasets": [{
                        "label": "Metric",
                        "data": data,
                        "borderColor": "var(--color-primary-700)",
                        "tension": 0.1
                    }, *goals]
                },
            ),
            "options": json.dumps({
                "scales": {
                    "x": {
                        "display": True,
                        "title": {
                            "display": True,
                            "text": "Week Day"
                        }
                    },
                    "y": {
                        "display": True,
                        "title": {
                            "display": True,
                            "text": "Records"
                        }
                    }
                }

            })
        }
        statistics.append(chart)

    return statistics


def get_last_month_statistics():
    today = datetime.datetime.today()
    month_start = timezone.make_aware(today.replace(day=1))
    month_days = calendar.monthrange(today.year, today.month)[1]

    statistics = []

    for metric in Metric.objects.all():
        data = []
        for day in range(1, today.day + 1):
            data.append(metric.records.filter(
                created_at__day=day,
                created_at__gt=month_start,
            ).count())

        labels = [day for day in range(1, month_days + 1)]
        goals = []

        for goal in metric.goals.all():
            value = get_goal_value_for_period(goal=goal, period=GoalPeriod.MONTH)
            goals.append({
                "label": goal.name,
                "data": [value] * len(labels),
                "borderColor": goal.color,
                "tension": 0.1,
            })

        chart = {
            "name": metric.name,
            "data": json.dumps(
                {
                    "labels": labels,
                    "datasets": [{
                        "label": "Metric",
                        "data": data,
                        "borderColor": "var(--color-primary-700)",
                        "tension": 0.1
                    }, *goals]
                },
            ),
            "options": json.dumps({
                "scales": {
                    "x": {
                        "display": True,
                        "title": {
                            "display": True,
                            "text": "Month Day"
                        }
                    },
                    "y": {
                        "display": True,
                        "title": {
                            "display": True,
                            "text": "Records"
                        }
                    }
                }

            })
        }
        statistics.append(chart)

    return statistics


def get_last_year_statistics():
    today = datetime.datetime.today()

    year_start = timezone.make_aware(today.replace(month=1, day=1))

    statistics = []

    for metric in Metric.objects.all():
        data = []
        for month in range(1, today.month + 1):
            data.append(metric.records.filter(
                created_at__month=month,
                created_at__gt=year_start,
            ).count())

        labels = list(calendar.month_name)[1:]
        goals = []

        for goal in metric.goals.all():
            value = get_goal_value_for_period(goal=goal, period=GoalPeriod.YEAR)
            goals.append({
                "label": goal.name,
                "data": [value] * len(labels),
                "borderColor": goal.color,
                "tension": 0.1,
            })

        chart = {
            "name": metric.name,
            "data": json.dumps(
                {
                    "labels": labels,
                    "datasets": [{
                        "label": "Metric",
                        "data": data,
                        "borderColor": "var(--color-primary-700)",
                        "tension": 0.1
                    }, *goals]
                },
            ),
            "options": json.dumps({
                "scales": {
                    "x": {
                        "display": True,
                        "title": {
                            "display": True,
                            "text": "Month"
                        }
                    },
                    "y": {
                        "display": True,
                        "title": {
                            "display": True,
                            "text": "Records"
                        }
                    }
                }

            })
        }
        statistics.append(chart)

    return statistics
