const API_BASE_URL = "https://nomad-movies.nomadcoders.workers.dev";

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}
interface HttpError extends Error {
  status?: number;
}

async function client<T>(endpoint: string, { params, ...customConfig }: RequestConfig): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    ...customConfig.headers,
  };

  const config: RequestInit = {
    ...customConfig,
    headers,
  };

  // URL에 쿼리 파라미터 추가
  const queryString = params ? `?${new URLSearchParams(params)}` : "";
  const url = `${API_BASE_URL}${endpoint}${queryString}`;

  try {
    const res = await fetch(url, config);
    const data = await res.json();

    if (!res.ok) {
      const error = new Error(data.message || "요청에 실패했습니다.") as HttpError;
      error.status = res.status;
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export { client };
