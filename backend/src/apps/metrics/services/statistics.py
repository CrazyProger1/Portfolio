import calendar
import datetime
import json

from django.utils import timezone

from src.apps.metrics.enums import GoalPeriod
from src.apps.metrics.models import MetricGoal
from src.apps.metrics.services.db import (
    get_user_metrics,
    get_user_goals,
    get_user_records,
)

WEEK_MONTH_FACTOR = 4.345
WEEK_YEAR_FACTOR = 52.143

CHART_OPTIONS = json.dumps(
    {
        "scales": {
            "x": {"display": True, "title": {"display": True, "text": "Week Day"}},
            "y": {"display": True, "title": {"display": True, "text": "Records"}},
        }
    }
)


def calculate_subperiod_goal_value(goal: MetricGoal, period: GoalPeriod) -> int:
    """
    Calculate the expected goal value for a subperiod within a given target period.

    This function normalizes a goal's target value (weekly, monthly, or yearly)
    to the equivalent value per subperiod of the specified target period.
    The subperiod length depends on the chosen period:
        - WEEK  -> 7 days
        - MONTH -> actual number of days in the current month
        - YEAR  -> actual number of days in the current year

    Examples:
        - If a goal is defined as "100 units per month" and the target period is MONTH,
              the function returns the daily expected value (100 / days_in_month).
        - If a goal is defined as "1000 units per year" and the target period is WEEK,
              the function returns the expected weekly value.

    Args:
        goal (MetricGoal): The goal object containing the value and its period
                               (e.g., per week, per month, per year).
        period (GoalPeriod): The target period to normalize the value to.

    Returns:
        int: The calculated value for the given subperiod of the target period.

    Raises:
            ValueError: If either the goal's period or the target period is unsupported.
    """

    if period == GoalPeriod.MONTH:
        today = datetime.datetime.today()
        subperiod_factor = calendar.monthrange(today.year, today.month)[1]
    elif period == GoalPeriod.YEAR:
        subperiod_factor = 12
    else:
        subperiod_factor = 7

    if goal.period == period:
        return goal.value / subperiod_factor

    if goal.period == GoalPeriod.WEEK:
        value_per_week = goal.value
    elif goal.period == GoalPeriod.MONTH:
        value_per_week = goal.value / WEEK_MONTH_FACTOR
    elif goal.period == GoalPeriod.YEAR:
        value_per_week = goal.value / WEEK_YEAR_FACTOR
    else:
        raise ValueError(f"Unsupported goal period: {goal.period}")

    if period == GoalPeriod.WEEK:
        return value_per_week / subperiod_factor
    elif period == GoalPeriod.MONTH:
        return value_per_week * WEEK_MONTH_FACTOR / subperiod_factor
    elif period == GoalPeriod.YEAR:
        return value_per_week * WEEK_YEAR_FACTOR / subperiod_factor

    raise ValueError(f"Unsupported target period: {period}")


def get_last_week_statistics(user):
    today = datetime.datetime.today()

    week_start = timezone.make_aware(today - datetime.timedelta(days=today.weekday()))
    week_start = week_start.replace(hour=0, minute=0, second=0, microsecond=0)

    statistics = []

    for metric in get_user_metrics(user=user):
        data = []

        for weekday in range(1, today.weekday() + 2):
            records = get_user_records(metric=metric, user=user).filter(
                created_at__week_day=weekday + 1,
                created_at__gt=week_start,
            )
            data.append(records.count())

        labels = list(calendar.day_name)
        goals = []

        for goal in get_user_goals(metric=metric, user=user):
            value = calculate_subperiod_goal_value(goal=goal, period=GoalPeriod.WEEK)
            goals.append(
                {
                    "label": goal.name,
                    "data": [value] * len(labels),
                    "borderColor": goal.color,
                    "tension": 0.1,
                }
            )

        chart = {
            "name": metric.name,
            "data": json.dumps(
                {
                    "labels": labels,
                    "datasets": [
                        {
                            "label": "Metric",
                            "data": data,
                            "borderColor": "var(--color-primary-700)",
                            "tension": 0.1,
                        },
                        *goals,
                    ],
                },
            ),
            "options": CHART_OPTIONS,
        }
        statistics.append(chart)

    return statistics


def get_last_month_statistics(user):
    today = datetime.datetime.today()
    month_start = timezone.make_aware(today.replace(day=1))
    month_days = calendar.monthrange(today.year, today.month)[1]

    statistics = []

    for metric in get_user_metrics(user=user):
        data = []
        for day in range(1, today.day + 1):
            records = get_user_records(metric=metric, user=user).filter(
                created_at__day=day,
                created_at__gt=month_start,
            )
            data.append(records.count())

        labels = [day for day in range(1, month_days + 1)]
        goals = []

        for goal in metric.goals.all():
            value = calculate_subperiod_goal_value(goal=goal, period=GoalPeriod.MONTH)
            goals.append(
                {
                    "label": goal.name,
                    "data": [value] * len(labels),
                    "borderColor": goal.color,
                    "tension": 0.1,
                }
            )

        chart = {
            "name": metric.name,
            "data": json.dumps(
                {
                    "labels": labels,
                    "datasets": [
                        {
                            "label": "Metric",
                            "data": data,
                            "borderColor": "var(--color-primary-700)",
                            "tension": 0.1,
                        },
                        *goals,
                    ],
                },
            ),
            "options": CHART_OPTIONS,
        }
        statistics.append(chart)

    return statistics


def get_last_year_statistics(user):
    today = datetime.datetime.today()

    year_start = timezone.make_aware(today.replace(month=1, day=1))

    statistics = []

    for metric in get_user_metrics(user=user):
        data = []
        for month in range(1, today.month + 1):
            records = get_user_records(metric=metric, user=user).filter(
                created_at__month=month,
                created_at__gt=year_start,
            )
            data.append(records.count())

        labels = list(calendar.month_name)[1:]
        goals = []

        for goal in get_user_goals(metric=metric, user=user):
            value = calculate_subperiod_goal_value(goal=goal, period=GoalPeriod.YEAR)
            goals.append(
                {
                    "label": goal.name,
                    "data": [value] * len(labels),
                    "borderColor": goal.color,
                    "tension": 0.1,
                }
            )

        chart = {
            "name": metric.name,
            "data": json.dumps(
                {
                    "labels": labels,
                    "datasets": [
                        {
                            "label": "Metric",
                            "data": data,
                            "borderColor": "var(--color-primary-700)",
                            "tension": 0.1,
                        },
                        *goals,
                    ],
                },
            ),
            "options": CHART_OPTIONS,
        }
        statistics.append(chart)

    return statistics
