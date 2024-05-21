import { getFetch, postFetch } from './common';

import { API_URLS } from '@/constants/config';

interface Choice {
  content: string;
}

interface PostQuestionData {
  userId: number;
  categoryId: number;
  title: string;
  content: string;
  choices: Choice[];
  closedAt: number;
}

export const getAllQuestionApi = async (
  userId: number,
  sorter: string,
  isMine: boolean,
) => {
  return getFetch(
    `${API_URLS.question}/list/send?userId=${userId}&sorter=${sorter}&isMine=${isMine}`,
  );
};

export const getQuestionApi = async (userId: number) => {
  return getFetch(`${API_URLS.question}/list/my?userId=${userId}`);
};

export const postQuestionApi = async (data: PostQuestionData) => {
  return postFetch(API_URLS.question, data);
};

export const getQuestionListReceiveApi = async (userId: number) => {
  return getFetch(`${API_URLS.question}/list/receive?userId=${userId}`);
};
