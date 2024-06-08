'use client';

import React, { useEffect } from 'react';

import Header from '@/components/common/Header';
import AIResultCard from '@/components/question/AIResultCard';
import QuestionResultCard from '@/components/question/QuestionResultCard';
import useAIAnswer from '@/hooks/useAIAnswer';

import { Container, ContentContainer, QuestionCardContainer } from './styles';

interface ShareProps {
  params: { id: string };
}

export default function Share({ params }: ShareProps) {
  const question = {
    aiAnswer: {
      choiceId: 2,
      reason:
        '다이어트 중이라도, 조금은 즐기는 것도 필요하지 않을까?🤗 마라탕을 먹으면서도 건강을 챙기자구!💪😊',
    },
    answerCount: 3,
    choices: [
      {
        content: '짜장면',
        id: 5,
        percent: 0,
      },
      {
        content: '마라탕',
        id: 6,
        percent: 33.3,
      },
    ],
    content: '나 근데 다이어트 중임',
    createdAt: '2024-05-18T01:15:2',
    questionId: 3,
    title: '오늘 점심 메뉴 추천 좀',
    userNickname: '해커린',
  };
  const { handleClickButton } = useAIAnswer([]);

  useEffect(() => {
    console.log(params.id);
  }, []);
  return (
    <Container>
      <Header
        title=''
        canGoBack={true}
        canDone={false}
      />
      <ContentContainer>
        <QuestionCardContainer>
          <QuestionResultCard question={question} />
          <AIResultCard
            question={question}
            onClick={handleClickButton}
          />
        </QuestionCardContainer>
      </ContentContainer>
    </Container>
  );
}
