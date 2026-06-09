import { type RequestInit } from "next/dist/server/web/spec-extension/request";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

interface ApiClientOptions extends RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {}),
    },
    next: options.next,
  });

  if (!response.ok) {
    const message = `API Error (${response.status}): ${response.statusText}`;
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}
