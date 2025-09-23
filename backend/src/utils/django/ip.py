from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    print(request.META)
    return request.META.get("X-Forwarded-For", request.META.get("X-Real-IP", request.META.get("REMOTE_ADDR")))
