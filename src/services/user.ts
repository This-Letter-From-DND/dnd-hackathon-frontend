import { API_URLS } from '@/constants/config';

import { getFetch, postFetch } from './common';

interface Data {
  email: string;
  password: string;
  nickname: string;
  categories: string;
}

export const getUserApi = async (userId: number) => {
  return getFetch(`${API_URLS.user}?userId=${userId}`);
};

export const postUserApi = async (data: Data) => {
  return postFetch(API_URLS.user, data);
};

// export const putUserApi = async (data) => {
//   return putFetch(API_URLS.user, data);
// };
