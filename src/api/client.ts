const API_BASE_URL = "https://nomad-movies.nomadcoders.workers.dev";

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

async function client(endpoint: string, { params, ...customConfig }: RequestConfig) {
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
    const json = await fetch(url, config).then((data) => data.json());
    return json;
  } catch (error) {
    throw error;
  }
}

export { client };
