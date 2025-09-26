from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("HTTP_X_REAL_IP", request.META.get("REMOTE_ADDR")))

    if "," in ip:
        return ip.split(",", maxsplit=1)[0]
    return ip


def get_client_referer(request: Request) -> str:
    return request.META.get("HTTP_X_CLIENT_REFERER", "").strip()


def get_client_user_agent(request: Request) -> str:
    return request.META.get("HTTP_X_CLIENT_USER_AGENT", "").strip()


def get_client_accept_language(request: Request) -> str:
    return request.META.get("HTTP_X_CLIENT_ACCEPT_LANGUAGE", "").strip()
