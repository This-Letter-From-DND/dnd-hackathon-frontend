import { API_URLS } from '@/constants/config';

import { postFetch } from './common';

interface AnswerData {
  userId: number;
  questionId: number;
  choiceId: number;
}

export const postAnswerApi = async (data: AnswerData) => {
  return postFetch(API_URLS.answer, data);
};
