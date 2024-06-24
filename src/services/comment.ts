import { API_URLS } from '@/constants/config';
import { getFetch, postFetch } from './common';

interface CommentData {
  reviewId: number;
  userId: number;
  content: string;
}

export const getReviewCommentAPI = async (reviewId: number) => {
  return getFetch(`${API_URLS.comment}/${reviewId}`);
};

export const createReviewCommentAPI = async (data: CommentData) => {
  return postFetch(API_URLS.comment, data);
};
