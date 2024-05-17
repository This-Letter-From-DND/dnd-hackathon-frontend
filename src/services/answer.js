import { postFetch } from './common';

import { API_URLS } from '@/constants/config';

export const postAnswerApi = async (data) => {
  return postFetch(API_URLS.answer, data);
};
