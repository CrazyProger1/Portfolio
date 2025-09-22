from rest_framework.request import Request


def get_client_ip(request: Request) -> str:
    print("\n" + "=" * 80)
    print("🚀 MAXIMUM DEBUG: IP DETECTION STARTED")
    print("=" * 80)

    # Dump ALL headers first
    print("\n📋 ALL REQUEST META (first 50 chars):")
    all_meta = {k: str(v)[:50] for k, v in request.META.items()}
    for key in sorted(all_meta.keys()):
        print(f"  {key:30} | {all_meta[key]}")

    # Focus on IP-related headers
    print("\n🔍 IP-RELATED HEADERS ONLY:")
    ip_headers = {}
    for key, value in request.META.items():
        if any(term in key.lower() for term in ['ip', 'forward', 'remote', 'proxy', 'cf', 'cloud']):
            ip_headers[key] = str(value)
            print(f"  {key:30} | {value}")

    print(f"\n📊 SUMMARY:")
    print(f"  Total headers: {len(request.META)}")
    print(f"  IP-related headers found: {len(ip_headers)}")

    # Priority 1: X-Real-IP
    x_real_ip = request.META.get('HTTP_X_REAL_IP')
    print(f"\n🎯 PRIORITY 1 - X-Real-IP: '{x_real_ip}'")
    if x_real_ip:
        print(f"  ✅ FOUND X-Real-IP: {x_real_ip}")
        print(f"  📍 Using this as client IP")
        print("=" * 80)
        return x_real_ip

    # Priority 2: X-Forwarded-For
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    print(f"\n🎯 PRIORITY 2 - X-Forwarded-For: '{x_forwarded_for}'")
    if x_forwarded_for:
        print(f"  📝 Raw XFF: '{x_forwarded_for}'")
        ip_list = [ip.strip().split(':')[0] for ip in x_forwarded_for.split(',')]
        print(f"  🔢 Parsed IPs: {ip_list}")

        # Check each IP
        for i, ip in enumerate(ip_list):
            print(f"    IP[{i}]: '{ip}' - Local? {is_local_ip(ip)} - Private? {is_private_ip(ip)}")

        # Find first valid
        for ip in ip_list:
            if is_valid_client_ip(ip):
                print(f"  ✅ VALID CLIENT IP FOUND: {ip}")
                print(f"  📍 Using this as client IP")
                print("=" * 80)
                return ip

        # Fallback to first
        if ip_list:
            print(f"  ⚠️  All IPs local/private, using first: {ip_list[0]}")
            print("=" * 80)
            return ip_list[0]

    # Priority 3: REMOTE_ADDR
    remote_addr = request.META.get('REMOTE_ADDR', '0.0.0.0')
    print(f"\n🎯 PRIORITY 3 - REMOTE_ADDR: '{remote_addr}'")
    print(f"  📍 This is what connected directly to Django")
    print(f"  Local? {is_local_ip(remote_addr)} - Private? {is_private_ip(remote_addr)}")
    print("=" * 80)
    return remote_addr


def is_local_ip(ip: str) -> bool:
    return ip in ['127.0.0.1', '::1', '0.0.0.0', 'localhost']


def is_private_ip(ip: str) -> bool:
    return ip.startswith(('10.', '172.', '192.168.', '100.', '169.254.'))


def is_valid_client_ip(ip: str) -> bool:
    """Check if IP looks like a real external client IP"""
    if is_local_ip(ip):
        return False
    if is_private_ip(ip):
        return False
    # Basic IP validation
    try:
        parts = ip.split('.')
        if len(parts) == 4:
            for part in parts:
                if not (0 <= int(part) <= 255):
                    return False
        return True
    except:
        return False
