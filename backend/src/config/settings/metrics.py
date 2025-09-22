from datetime import timedelta
from enum import StrEnum


class DefaultMetric(StrEnum):
    VISIT = "visit"
    MESSAGE = "message"


METRIC_RECORD_VISIT_LIFETIME = timedelta(minutes=5)
