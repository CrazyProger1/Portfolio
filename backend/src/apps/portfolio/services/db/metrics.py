from src.apps.portfolio.models import ProjectMetric, Project


def get_project_metrics(project: Project) -> dict:
    project_metrics = ProjectMetric.objects.filter(project=project)
    result = {}

    for metric in project_metrics:
        result[metric.metric.slug] = metric.value

    return result
