import { API_URLS } from '@/constants/config';

import { deleteFetch, getFetch, postFetch, putFetch } from './common';

interface CommentData {
  reviewId: number;
  userId: number;
  content: string;
}

interface ModifyCommentData {
  reviewCommentId: number;
  content: string;
}

export const getReviewCommentAPI = async (reviewId: number) => {
  return getFetch(`${API_URLS.comment}/${reviewId}`);
};

export const createReviewCommentAPI = async (data: CommentData) => {
  return postFetch(API_URLS.comment, data);
};

export const putReviewCommentAPI = async (data: ModifyCommentData) => {
  return putFetch(API_URLS.comment, data);
};

export const deleteReviewCommentAPI = async (reviewCommentId: number) => {
  return deleteFetch(`${API_URLS.comment}/${reviewCommentId}`);
};
