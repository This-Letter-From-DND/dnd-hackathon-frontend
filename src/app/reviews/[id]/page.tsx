'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import banana from '@/assets/Banana.svg';
import more from '@/assets/More.svg';
import user from '@/assets/user.svg';
import Header from '@/components/common/Header';
import CommentInput from '@/components/review/CommentInput';
import ReviewItem from '@/components/review/ReviewItem';

import {
  Comment,
  CommentContainer,
  CommentContent,
  CommentCount,
  Comments,
  Content,
  ContentContainer,
  ImageContainer,
  Line,
  Name,
  OriginalQuestionButton,
  Time,
  TitleContainer,
  TitleStyled,
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
        title={<TitleStyled>{'후기 상세'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <ContentContainer>
        <TitleContainer>
          <ReviewItem />
          <Image
            src={more}
            alt='more'
          />
        </TitleContainer>
        <Line />
        <Content>
          회사 미쳤어 회사싸이코임 직장내 괴롭힘 딴지검 꼰대같음 말걸지 않았음
          좋겠어
        </Content>
        <ImageContainer
          src={banana}
          alt='banana'
        />
        <OriginalQuestionButton>{`원래 질문 보기 >`}</OriginalQuestionButton>
        <CommentContainer>
          <CommentCount>
            댓글 <strong>3</strong>
          </CommentCount>
          <Line />
          <Comments>
            <Comment>
              <UserInfoContainer>
                <UserInfo>
                  <Image
                    src={user}
                    alt='user'
                  ></Image>
                  <Name>닉네임은커피</Name>
                  <Time>2024.04.04</Time>
                </UserInfo>
                <Image
                  src={more}
                  alt='more'
                />
              </UserInfoContainer>
              <CommentContent>피자헛 좋다</CommentContent>
            </Comment>
            <Comment>
              <UserInfoContainer>
                <UserInfo>
                  <Image
                    src={user}
                    alt='user'
                  ></Image>
                  <Name>닉네임은커피</Name>
                  <Time>2024.04.04</Time>
                </UserInfo>
                <Image
                  src={more}
                  alt='more'
                />
              </UserInfoContainer>
              <CommentContent>누가 먹냐 피자헛</CommentContent>
            </Comment>
            <Comment>
              <UserInfoContainer>
                <UserInfo>
                  <Image
                    src={user}
                    alt='user'
                  ></Image>
                  <Name>닉네임은커피</Name>
                  <Time>2024.04.04</Time>
                </UserInfo>
                <Image
                  src={more}
                  alt='more'
                />
              </UserInfoContainer>
              <CommentContent>내가 먹음!!!!</CommentContent>
            </Comment>
          </Comments>
        </CommentContainer>
      </ContentContainer>
      <CommentInput />
    </Wrapper>
  );
}
