from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    # DEBUG: Print ALL headers that might contain IPs
    print("=== DEBUG HEADERS ===")
    print(f"REMOTE_ADDR: {request.META.get('REMOTE_ADDR')}")
    print(f"HTTP_X_REAL_IP: {request.META.get('HTTP_X_REAL_IP')}")
    print(f"HTTP_X_FORWARDED_FOR: {request.META.get('HTTP_X_FORWARDED_FOR')}")
    print(f"X-Real-IP: {request.META.get('X-Real-IP')}")
    print(f"X-Forwarded-For: {request.META.get('X-Forwarded-For')}")
    print(f"HTTP_X_FORWARDED_PROTO: {request.META.get('HTTP_X_FORWARDED_PROTO')}")
    print(f"All META keys: {list(request.META.keys())}")
    print("=== END DEBUG ===")

    # Try X-Real-IP first (direct proxy IP)
    x_real_ip = request.META.get('HTTP_X_REAL_IP')
    if x_real_ip:
        return x_real_ip

    # Try X-Forwarded-For (proxy chain)
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        # Split by comma and get the first IP (original client)
        # Remove any port numbers
        ip_list = [ip.strip().split(':')[0] for ip in x_forwarded_for.split(',')]
        # Return the first non-private IP
        for ip in ip_list:
            if not (ip.startswith('127.') or ip.startswith('10.') or ip.startswith('172.') or ip.startswith(
                    '192.168.')):
                return ip
        # If all are private, return the first one
        return ip_list[0]

    # Fallback to REMOTE_ADDR
    return request.META.get('REMOTE_ADDR', '')
