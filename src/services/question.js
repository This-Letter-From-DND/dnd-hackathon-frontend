import { getFetch, postFetch } from './common';

import { API_URLS } from '@/constants/config';

export const getAllQuestionApi = async (id, sorter, isMine) => {
  return getFetch(
    `${API_URLS.question}/list/send?userId=${id}&sorter=${sorter}&isMine=${isMine}`,
  );
};

export const getQuestionApi = async (id) => {
  return getFetch(`${API_URLS.question}/list/my?userId=${id}`);
};

export const postQuestionApi = async (data) => {
  return postFetch(API_URLS.question, data);
};
