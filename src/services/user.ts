import { getFetch, postFetch, putFetch } from './common';

import { API_URLS } from '@/constants/config';

export const getUserApi = async (userId: number) => {
  return getFetch(`${API_URLS.user}?userId=${userId}`);
};

// export const postUserApi = async (data) => {
//   return postFetch(API_URLS.user, data);
// };

// export const putUserApi = async (data) => {
//   return putFetch(API_URLS.user, data);
// };
