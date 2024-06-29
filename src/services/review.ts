import { API_URLS } from '@/constants/config';

import { getFetch, putFetch } from './common';

interface ReviewData {
  questionId: number;
  title: string;
  content: string;
}

export const getReviewListlAPI = async () => {
  return getFetch(
    `${API_URLS.review}/list?userId=2&categoryId=&page=0&size=10`,
  );
};

export const getReviewDetailAPI = async (reviewId: number) => {
  return getFetch(`${API_URLS.review}/${reviewId}`);
};

export const createReviewAPI = async (review: ReviewData) => {
  return putFetch(API_URLS.review, review);
};
