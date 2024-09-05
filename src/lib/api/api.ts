const BASE_URL = import.meta.env.SERVER_BASE_URL || "http://localhost:3005";

export const fetchRequest = async <T, U>(
  url: string,
  method: RequestInit["method"],
  body: U
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("something went wrong!");
  }

  return await response.json();
};
