from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    ip = request.META.get("HTTP_X_FORWARDED_FOR", request.META.get("HTTP_X_REAL_IP", request.META.get("REMOTE_ADDR")))

    if "," in ip:
        return ip.split(ip, maxsplit=1)[0]
    return ip
