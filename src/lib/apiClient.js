const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const apiRequest = async (endpoint, method = "GET", data) => {
  try {
    const res = await fetch(`${BACKEND_URL}${endpoint}`, {
      method,
      headers: {
        "x-client-key": process.env.NEXT_PUBLIC_CLIENT_KEY,
        "Content-Type": "application/json",
      },
      ...(data && { body: JSON.stringify(data) }),
    });

    const resData = await res.json();

    if (!res.ok) {
      throw resData;
    }

    return {
      status: resData.success || true,
      message: resData.message || "Success",
      data: resData.data || null,
      meta: resData.meta || null,
    };
  } catch (error) {
    return {
      status: false,
      message: error.message || "API error",
      error: error.error || error.message || "Unknown error",
      data: null,
    };
  }
};