const commonFetch = (url: string, options?: RequestInit): Promise<any> => {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    ...options,
    mode: 'cors',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: The status is ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
};

export const getFetch = (url: string, options?: RequestInit): Promise<any> => {
  return commonFetch(url, {
    ...options,
    headers: options?.headers,
  });
};

export const postFetch = (
  url: string,
  param: { [key: string]: any },
  options?: RequestInit,
): Promise<any> => {
  return commonFetch(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: JSON.stringify(param),
  });
};

export const putFetch = (
  url: string,
  param: { [key: string]: any },
  options?: RequestInit,
): Promise<any> => {
  return commonFetch(url, {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: JSON.stringify(param),
  });
};

export const deleteFetch = (
  url: string,
  param?: { [key: string]: any },
  options?: RequestInit,
): Promise<any> => {
  return commonFetch(url, {
    ...options,
    method: 'DELETE',
    headers: options?.headers,
    body: JSON.stringify(param),
  });
};
