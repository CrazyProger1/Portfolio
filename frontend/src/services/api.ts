import { API_KEY, API_URL } from "@/config";

export const fetchExtended = async (path: string, options: RequestInit = {}): Promise<Response> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    Authorization: `apikey ${API_KEY}`,
    ...(options.headers || {}),
  };

  return await fetch(`${API_URL}${path}`, {
    next: {
      revalidate: 60,
    },
    ...options,
    headers,
  });
};
