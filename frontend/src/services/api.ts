"use server";

import { headers } from "next/headers";

import { API_KEY, API_URL } from "@/config";

export const fetchExtended = async (path: string, options: RequestInit = {}): Promise<Response> => {
  const nextHeaders = await headers();
  const clientIp =
    nextHeaders.get("x-forwarded-for")?.split(",").shift()?.trim() ||
    nextHeaders.get("x-real-ip") ||
    "unknown";
  const referer = nextHeaders.get("referer");
  const userAgent = nextHeaders.get("user-agent");

  const requestHeaders: HeadersInit = {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    Authorization: `apikey ${API_KEY}`,
    "X-Forwarded-For": clientIp,
    ...(referer ? { Referer: referer } : {}),
    ...(userAgent ? { "User-Agent": userAgent } : {}),
    ...(options.headers || {}),
  };

  return await fetch(`${API_URL}${path}`, {
    next: {
      revalidate: 60,
    },
    ...options,
    headers: requestHeaders,
  });
};
