declare interface Review {
  isMine?: boolean;
  isReported?: boolean;
  nickname: string;
  reviewId: number;
  questionId?: number;
  title: string;
  content?: string;
  viewCount: number;
}
