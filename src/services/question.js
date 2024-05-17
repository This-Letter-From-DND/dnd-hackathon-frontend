import { getFetch, postFetch } from './common';

import { API_URLS } from '@/constants/config';

export const getQuestionApi = async (id) => {
  return getFetch(`${API_URLS.question}?userId=${id}`);
};

export const postQuestionApi = async (data) => {
  return postFetch(API_URLS.question, data);
};
