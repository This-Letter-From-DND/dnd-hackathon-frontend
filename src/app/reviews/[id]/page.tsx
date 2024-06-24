'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import MoreIcon from '@/assets/MoreIcon.svg';
import Font from '@/components/common/Font';
import Header from '@/components/common/Header';
import CommentItem from '@/components/review/CommentItem';
import ReviewItem from '@/components/review/ReviewItem';

import {
  Button,
  CommentContainer,
  CommentHeader,
  CommentInputStyle,
  Comments,
  ContentContainer,
  Line,
  TitleContainer,
  Wrapper,
  Input,
} from './styles';
import { getReviewDetailAPI } from '@/services/review';
import {
  createReviewCommentAPI,
  getReviewCommentAPI,
} from '@/services/comment';

interface ReviewDetailsProps {
  params: { id: string };
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
  const [review, setReview] = useState<Review>();
  const [comments, setComments] = useState<Comment[]>();
  const [newComment, setNewComment] = useState<string>('');
  const [isNewComment, setIsNewComment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewDetailAPI(+params.id);
      setReview(data);
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewCommentAPI(+params.id);
      setComments(data);
    };
    fetchData();
  }, [params.id, isNewComment]);

  const handleClickButton = async () => {
    if (newComment.trim()) {
      const addedComment = await createReviewCommentAPI({
        reviewId: +params.id,
        userId: 2,
        content: newComment,
      });
      setIsNewComment(true);
      setNewComment('');
      setIsNewComment(false);
    }
  };

  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            후기 상세
          </Font>
        }
        canGoBack={true}
        canDone={false}
      />
      <ContentContainer>
        <TitleContainer>
          {review && <ReviewItem review={review} />}
          <Image
            src={MoreIcon}
            alt='more icon'
          />
        </TitleContainer>
        <Line />
        <Font color={700}>{review?.content}</Font>
        <CommentContainer>
          <CommentHeader>
            <Font color={700}>댓글</Font>
            <Font
              color={700}
              fontWeight='bold'
            >
              {comments?.length}
            </Font>
          </CommentHeader>
          <Line />
          <Comments>
            {comments?.map((comment, index) => (
              <CommentItem
                key={index}
                comment={comment}
              />
            ))}
          </Comments>
        </CommentContainer>
      </ContentContainer>
      <CommentInputStyle>
        <Input
          placeholder='댓글을 입력해주세요.'
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <Button
          $visible={newComment}
          onClick={handleClickButton}
        >
          등록
        </Button>
      </CommentInputStyle>
    </Wrapper>
  );
}
