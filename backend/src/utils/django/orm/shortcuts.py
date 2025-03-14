import logging

from django.db import models

from src.utils.django.orm.types import (
    Model,
    Source,
)

logger = logging.getLogger(__name__)


def get_manager(
        model: type[models.Model],
        manager: str = "objects",
) -> models.Manager:
    manager_instance = getattr(model, manager, None)

    if manager_instance is None:
        raise AttributeError(f"No manager named '{manager}' found in {model.__name__}")

    if not isinstance(manager_instance, models.Manager):
        raise ValueError(
            f"'{manager}' in {model.__name__} must be an instance of models.Manager"
        )

    return manager_instance


def get_queryset(
        source: Source[Model],
        manager: str = "objects",
) -> models.QuerySet[Model]:
    if isinstance(source, models.QuerySet):
        return source
    elif isinstance(source, models.Manager):
        return source.get_queryset()
    else:
        return get_manager(model=source, manager=manager).get_queryset()


def create_object(
        source: Source[Model],
        manager: str = "objects",
        **data,
) -> Model:
    queryset = get_queryset(source=source, manager=manager)
    obj = queryset.create(**data)
    logger.debug(f"Created {obj.__class__.__name__} with data: {data}")
    return obj


def get_all_objects(
        source: Source[Model],
        manager: str = "objects",
) -> models.QuerySet[Model]:
    queryset = get_queryset(source=source, manager=manager)
    logger.debug(f"Retrieved all objects for {queryset.model.__name__}")
    return queryset


def filter_objects(
        source: Source[Model],
        *args,
        manager: str = "objects",
        **kwargs,
) -> models.QuerySet[Model]:
    queryset = get_queryset(source=source, manager=manager)
    resultset = queryset.filter(*args, **kwargs)
    logger.debug(f"Filtered {resultset.model.__name__} with filters: {args}, {kwargs}")
    return resultset


def exclude_objects(
        source: Source[Model],
        *args,
        manager: str = "objects",
        **kwargs,
) -> models.QuerySet[Model]:
    queryset = get_queryset(source=source, manager=manager)
    resultset = queryset.exclude(*args, **kwargs)
    logger.debug(f"Excluded {resultset.model.__name__} with filters: {args}, {kwargs}")
    return resultset


def get_object_or_error(
        source: Source[Model],
        *args,
        manager: str = "objects",
        **kwargs,
) -> Model:
    queryset = get_queryset(source=source, manager=manager)

    try:
        obj = queryset.get(*args, **kwargs)
        logger.debug(
            f"Retrieved {queryset.model.__name__} object: {obj} with filters: {args}, {kwargs}"
        )
        return obj
    except queryset.model.DoesNotExist:
        logger.warning(
            f"{queryset.model.__name__} object not found with filters: {args}, {kwargs}"
        )
        raise


def get_object_or_none(
        source: Source[Model],
        *args,
        manager: str = "objects",
        **kwargs,
) -> Model | None:
    try:
        return get_object_or_error(source, *args, manager=manager, **kwargs)
    except source.DoesNotExist:
        logger.debug(
            f"{source.__name__} object not found with filters: {args}, {kwargs}"
        )
        return None
