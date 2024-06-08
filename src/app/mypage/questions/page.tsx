'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Button from '@/components/common/Button';
import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import AIResultCard from '@/components/question/AIResultCard';
import QuestionResultCard from '@/components/question/QuestionResultCard';
import { ROUTE_PATHS } from '@/constants/config';
import useAIAnswer from '@/hooks/useAIAnswer';
import { getQuestionApi } from '@/services/question';
import { formatDate } from '@/utils/fomatDate';

import {
  ButtonContainer,
  ListContainer,
  QuestionCardContainer,
  TimeContainer,
  Wrapper,
} from './styles';

export default function MyQuestions() {
  const router = useRouter();
  const { questionList, setQuestionList, handleClickButton } = useAIAnswer([]);

  useEffect(() => {
    const getData = async () => {
      const data: Question[] = await getQuestionApi(1);
      setQuestionList(data);
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            내가 쓴 질문
          </Font>
        }
        canGoBack={true}
        canDone={false}
      />
      <ListContainer>
        {questionList?.map((question, index) => (
          <QuestionCardContainer key={index}>
            <QuestionResultCard question={question}>
              <TimeContainer>
                <Font color={700}>{formatDate(question.createdAt || '')}</Font>
                <ButtonContainer>
                  <Button
                    width='81px'
                    height='36px'
                    bgColor='#ADB5BD'
                    onClick={() =>
                      router.push(
                        `${ROUTE_PATHS.shareQuestion}/${question.questionId}`,
                      )
                    }
                  >
                    <Font
                      color='white'
                      fontSize='small'
                    >
                      공유하기
                    </Font>
                  </Button>
                  <Button
                    width='81px'
                    height='36px'
                    bgColor='#2F80ED'
                    onClick={() =>
                      router.push(
                        `${ROUTE_PATHS.newReview}/${question.questionId}`,
                      )
                    }
                  >
                    <Font
                      color='white'
                      fontSize='small'
                    >
                      후기작성
                    </Font>
                  </Button>
                </ButtonContainer>
              </TimeContainer>
            </QuestionResultCard>
            <AIResultCard
              question={question}
              onClick={handleClickButton}
            />
          </QuestionCardContainer>
        ))}
      </ListContainer>
      <Footer />
    </Wrapper>
  );
}
