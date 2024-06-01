import { API_URLS } from '@/constants/config';

import { getFetch, postFetch, putFetch } from './common';

interface SignUpData {
  email: string;
  password: string;
  nickname: string;
  categories: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const getUserApi = async (userId: number) => {
  return getFetch(`${API_URLS.user}?userId=${userId}`);
};

export const postUserApi = async (data: SignUpData) => {
  return postFetch(API_URLS.user, data);
};

export const putUserApi = async (data: LoginData) => {
  return putFetch(API_URLS.user, data);
};
