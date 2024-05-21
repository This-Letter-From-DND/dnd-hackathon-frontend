import { getFetch } from './common';

import { API_URLS } from '@/constants/config';

export const getCategoryApi = async () => {
  return getFetch(API_URLS.category);
};
