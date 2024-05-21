import { API_URLS } from '@/constants/config';

import { postFetch } from './common';

interface PostAnswer {
  userId: number;
  questionId: number;
  choiceId: number;
}

export const postAnswerApi = async (data: PostAnswer) => {
  return postFetch(API_URLS.answer, data);
};
