import { postFetch } from './common';

import { API_URLS } from '@/constants/config';

export const postAIAnswer = async (data) => {
  return postFetch(API_URLS.ai, data);
};
