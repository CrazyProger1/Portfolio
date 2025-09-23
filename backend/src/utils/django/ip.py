from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    return request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("X-Real-IP", request.META.get("REMOTE_ADDR")))
