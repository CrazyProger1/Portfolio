from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    # Priority 1: Cloudflare/Webdock specific (true client IP)
    cf_ip = request.META.get('HTTP_CF_CONNECTING_IP')
    if cf_ip:
        print(f"DEBUG - Using CF-Connecting-IP: {cf_ip}")  # Remove after testing
        return cf_ip

    # Priority 2: X-Real-IP (direct proxy)
    x_real_ip = request.META.get('HTTP_X_REAL_IP')
    if x_real_ip:
        print(f"DEBUG - Using X-Real-IP: {x_real_ip}")  # Remove after testing
        return x_real_ip

    # Priority 3: X-Forwarded-For (first non-local IP in chain)
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        # Split by comma, strip ports/spaces, skip local/private IPs
        ip_list = [ip.strip().split(':')[0] for ip in x_forwarded_for.split(',')]
        for ip in ip_list:
            # Skip obvious locals/proxies
            if ip not in ['127.0.0.1', '::1', '0.0.0.0'] and not ip.startswith(
                    ('10.', '172.', '192.168.', '100.', '169.254.')):
                print(f"DEBUG - Using first valid XFF IP: {ip}")  # Remove after testing
                return ip
        # Fallback to first if all local
        if ip_list:
            return ip_list[0]

    # Priority 4: Fallback
    return request.META.get('REMOTE_ADDR', '0.0.0.0')
