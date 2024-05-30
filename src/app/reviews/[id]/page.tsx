'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import MoreIcon from '@/assets/MoreIcon.svg';
import ReviewDetailsExample from '@/assets/ReviewDetailsExample.svg';
import Font from '@/components/common/Font';
import Header from '@/components/common/Header';
import CommentInput from '@/components/review/CommentInput';
import CommentItem from '@/components/review/CommentItem';
import ReviewItem from '@/components/review/ReviewItem';

import {
  CommentContainer,
  CommentHeader,
  Comments,
  ContentContainer,
  ImageContainer,
  Line,
  TitleContainer,
  Wrapper,
} from './styles';

interface ReviewDetailsProps {
  params: { id: string };
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
  useEffect(() => {
    console.log(params.id);
  }, []);

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
          <ReviewItem />
          <Image
            src={MoreIcon}
            alt='more icon'
          />
        </TitleContainer>
        <Line />
        <Font color={700}>
          회사 미쳤어 회사싸이코임 직장내 괴롭힘 딴지검 꼰대같음 말걸지 않았음
          좋겠어
        </Font>
        <ImageContainer>
          <Image
            src={ReviewDetailsExample}
            alt='review details example'
          />
        </ImageContainer>
        <Font
          color='secondary'
          fontWeight='bold'
        >{`원래 질문 보기 >`}</Font>
        <CommentContainer>
          <CommentHeader>
            <Font color={700}>댓글</Font>
            <Font
              color={700}
              fontWeight='bold'
            >
              1
            </Font>
          </CommentHeader>
          <Line />
          <Comments>
            <CommentItem />
          </Comments>
        </CommentContainer>
      </ContentContainer>
      <CommentInput />
    </Wrapper>
  );
}
