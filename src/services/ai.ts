import { API_URLS } from '@/constants/config';

import { postFetch } from './common';

interface AIAnswerData {
  userId: number;
  questionId: number;
  choiceId: number;
  reason?: string;
}

export const postAIAnswer = async (data: AIAnswerData): Promise<any> => {
  return postFetch(API_URLS.ai, data);
};
