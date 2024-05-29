'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import MoreIcon from '@/assets/MoreIcon.svg';
import ProfileIcon from '@/assets/ProfileIcon.svg';
import ReviewDetailsExample from '@/assets/ReviewDetailsExample.svg';
import Font from '@/components/common/Font';
import Header from '@/components/common/Header';
import CommentInput from '@/components/review/CommentInput';
import ReviewItem from '@/components/review/ReviewItem';

import {
  Comment,
  CommentContainer,
  CommentContent,
  Comments,
  ContentContainer,
  ImageContainer,
  Line,
  Name,
  Time,
  TitleContainer,
  Top,
  UserInfo,
  UserInfoContainer,
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
        title='후기 상세'
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
        <ImageContainer
          src={ReviewDetailsExample}
          alt='review details example'
        />
        <Font
          color='secondary'
          fontWeight='bold'
        >{`원래 질문 보기 >`}</Font>
        <CommentContainer>
          <Top>
            <Font color={700}>댓글</Font>
            <Font
              color={700}
              fontWeight='bold'
            >
              3
            </Font>
          </Top>
          <Line />
          <Comments>
            <Comment>
              <UserInfoContainer>
                <UserInfo>
                  <Image
                    src={ProfileIcon}
                    alt='profile icon'
                  ></Image>
                  <Name>
                    <Font
                      color={700}
                      fontSize='xsmall'
                    >
                      닉네임은커피
                    </Font>
                  </Name>
                  <Time>
                    <Font
                      color={700}
                      fontSize='xsmall'
                    >
                      2024.04.04
                    </Font>
                  </Time>
                </UserInfo>
                <Image
                  src={MoreIcon}
                  alt='more icon'
                />
              </UserInfoContainer>
              <CommentContent>피자헛 좋다</CommentContent>
            </Comment>
          </Comments>
        </CommentContainer>
      </ContentContainer>
      <CommentInput />
    </Wrapper>
  );
}
