import { API_URLS } from '@/constants/config';

import { getFetch } from './common';

export const getCategoryApi = async () => {
  return getFetch(API_URLS.category);
};
