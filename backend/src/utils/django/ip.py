from rest_framework.request import Request
import os
import IP2Location


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


def get_ip_country(ip: str) -> str | None:
    database_path = os.path.join("data", "ipdb.bin")
    database = IP2Location.IP2Location(database_path)
    code = database.get_country_short(ip)
    if code == "INVALID IP ADDRESS":
        return None
    return code.lower()
