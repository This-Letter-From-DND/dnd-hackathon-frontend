import { postFetch } from './common';
import { API_URLS } from '@/constants/config';

interface Data {
  userId: number;
  questionId: number;
  choiceId: number;
  reason?: string; // This is optional based on the usage of `?`
}

export const postAIAnswer = async (data: Data): Promise<any> => {
  return postFetch(API_URLS.ai, data);
};
