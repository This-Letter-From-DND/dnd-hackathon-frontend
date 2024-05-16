/**
 * @param {string} url
 * @param {RequestInit} options
 * @returns {Promise<Response>}
 */
const commonFetch = (url, options) => {
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
      console.log(err.message);
    });
};

/**
 * @method GET
 * @param {string} url
 * @param {RequestInit} options
 * @returns {Promise<Response>}
 */
export const getFetch = (url, options) => {
  return commonFetch(url, {
    ...options,
    headers: options?.headers,
  });
};

/**
 * @method POST
 * @param {string} url
 * @param {{[key in PropertyKey]: any}} param
 * @param {RequestInit} options
 * @returns {Promise<Response>}
 */
export const postFetch = (url, param, options) => {
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

/**
 * @method PATCH
 * @param {string} url
 * @param {{[key in PropertyKey]: any}} param
 * @param {RequestInit} options
 * @returns {Promise<Response>}
 */
export const patchFetch = (url, param, options) => {
  return commonFetch(url, {
    ...options,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: JSON.stringify(param),
  });
};

/**
 * @method DELETE
 * @param {string} url
 * @param {RequestInit} options
 * @returns {Promise<Response>}
 */
export const deleteFetch = (url, options) => {
  return commonFetch(url, {
    ...options,
    method: 'DELETE',
    ...options?.headers,
  });
};
