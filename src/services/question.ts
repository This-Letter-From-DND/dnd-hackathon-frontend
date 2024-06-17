import { API_URLS } from '@/constants/config';

import { getFetch, postFetch } from './common';

interface Choice {
  content: string;
}

interface QuestionData {
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

export const postQuestionApi = async (data: QuestionData) => {
  return postFetch(API_URLS.question, data);
};

export const getQuestionListReceiveApi = async (userId: number) => {
  return getFetch(`${API_URLS.question}/list/receive?userId=${userId}`);
};

export const getQuestionDetailReceiveApi = async (questionId: number) => {
  return getFetch(`${API_URLS.question}/detail/${questionId}`);
};
