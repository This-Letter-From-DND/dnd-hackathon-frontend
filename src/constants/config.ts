export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const API_URLS = {
  user: '/v1/user',
  question: '/v1/question',
  category: '/v1/category',
  answer: '/v1/answer',
  ai: '/v1/answer/ai',
};

export const ROUTE_PATHS = {
  home: '/',
  login: '/user/login',
  signUp: '/user/signup',
  questions: '/questions',
  newQuestion: '/questions/new',
  shareQuestion: '/questions/share',
  reviews: '/reviews',
  newReview: '/reviews/new',
  myPage: '/mypage',
  myQuestions: '/mypage/questions',
};
