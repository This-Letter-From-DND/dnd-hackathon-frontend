'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { TinderLikeCard } from 'react-stack-cards';

import AddQuestionIcon from '@/assets/AddQuestionIcon.svg';
import BananaIcon from '@/assets/BananaIcon.svg';
import CardCharacter from '@/assets/CardCharacter.svg';
import CardProfile1 from '@/assets/CardProfile1.svg';
import CardProfile2 from '@/assets/CardProfile2.svg';
import CardProfile3 from '@/assets/CardProfile3.svg';
import EmptyCard from '@/assets/EmptyCard.svg';
import HomeLogo from '@/assets/HomeLogo.svg';
import MainBackgroundFront from '@/assets/MainBackgroundFront.svg';
import SkipXIcon from '@/assets/SkipXIcon.svg';
import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import { ROUTE_PATHS } from '@/constants/config';
import { postAnswerApi } from '@/services/answer';
import { getQuestionListReceiveApi } from '@/services/question';

import {
  AddQuestion,
  AnswerContainer,
  BananaCountStyled,
  Card,
  ContainerStyled,
  FooterContainer,
  ImageContainer,
  MainStyled,
  QuestionContainer,
  SkipStyled,
  TransparentButtonContainer,
} from './styles';

interface Question {
  questionId: number;
  title: string;
  content: string;
  choices: {
    id: number;
    content: string;
  }[];
}

const DIRECTION = {
  LEFT: 'swipeLeft',
  RIGHT: 'swipeRight',
  DOWN: 'swipeDown',
} as const;

export default function Home() {
  const router = useRouter();
  const CurrentCard = useRef<any>(null);
  const CurrentQuestion = useRef<Question | null>(null);
  const [direction, setDirection] = useState<string>(DIRECTION.LEFT);
  const [rewardCount, setRewardCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [questionList, setQuestionList] = useState<Question[]>([]);

  const getQuestionListReceive = async () => {
    const response = await getQuestionListReceiveApi(1);
    setRewardCount(response.rewardCount);
    setQuestionList(response.questions);
    if (response.questions.length > 0) {
      setIsEmpty(false);
    }
  };

  const postAnswer = async (body: {
    userId: number;
    questionId: number;
    choiceId: number;
  }) => {
    const response = await postAnswerApi(body);
    setRewardCount(response.rewardCount);
  };

  useEffect(() => {
    getQuestionListReceive();
  }, []);

  const handleClickButton = (
    direction: (typeof DIRECTION)[keyof typeof DIRECTION],
    newChoiceId: number,
  ) => {
    if (!CurrentCard.current) {
      return;
    }
    if (!CurrentQuestion.current) {
      return;
    }

    postAnswer({
      userId: 1,
      questionId: CurrentQuestion.current.questionId,
      choiceId:
        newChoiceId > 0
          ? CurrentQuestion.current.choices[newChoiceId - 1].id
          : 0,
    });
    setDirection(direction);
    CurrentCard.current.swipe();
  };

  const handleClickSwapLeft = () => handleClickButton(DIRECTION.LEFT, 1);
  const handleClickSwapRight = () => handleClickButton(DIRECTION.RIGHT, 2);
  const handleClickSwapDown = () => handleClickButton(DIRECTION.DOWN, 0);

  const getCardProfile = () => {
    const RANDOM = Math.random() * 10;
    return RANDOM > 6 ? CardProfile1 : RANDOM > 3 ? CardProfile2 : CardProfile3;
  };

  const convertQuestionsToStrings = (questions: Question[]): string[] => {
    return questions.map((question) => JSON.stringify(question));
  };

  const parseQuestionsFromImages = (images: string[]): Question[] => {
    return images.map((image) => JSON.parse(image));
  };

  const CardContainer = (
    <>
      <ContainerStyled $marginTop={`90px`}>
        <BananaCountStyled>
          <Font color='white'>보유 바나나</Font>
          <Image
            src={BananaIcon}
            alt='banana count'
          />
          <Font
            color='point'
            fontWeight='bold'
          >
            {rewardCount}
          </Font>
        </BananaCountStyled>
      </ContainerStyled>
      <div style={{ position: 'relative', width: 0, height: 0 }}>
        <Image
          src={CardCharacter}
          alt='Character'
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '-61px',
            left: '64px',
          }}
        />
      </div>
      <ContainerStyled
        $marginTop={`-10px`}
        style={{
          position: 'relative',
          zIndex: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TinderLikeCard
          images={convertQuestionsToStrings(questionList)}
          width='380'
          height='200'
          direction={direction}
          duration={400}
          ref={(node) => {
            if (
              node &&
              node.state.list
                .filter((element: any) => element.val)
                .every((element: any) => element.out === 'out')
            ) {
              setIsEmpty(true);
            }
            if (node && node?.state?.list) {
              const foundQuestion = node.state.list.find(
                (element: any) => element.out !== 'out',
              );
              CurrentQuestion.current = foundQuestion?.val
                ? JSON.parse(foundQuestion.val)
                : null;
            }
            CurrentCard.current = node;
          }}
          className='tinder'
        >
          {parseQuestionsFromImages(
            convertQuestionsToStrings(questionList),
          ).map(({ questionId, title, content, choices }) => (
            <Card key={questionId}>
              <QuestionContainer>
                <ImageContainer>
                  <Image
                    src={MainBackgroundFront}
                    alt='main background front'
                  />
                </ImageContainer>
                <Image
                  src={getCardProfile()}
                  alt='profile'
                />
                <Font
                  fontSize='large'
                  fontWeight='bold'
                >
                  {title}
                </Font>
                <Font color={700}>{content}</Font>
              </QuestionContainer>
              <AnswerContainer>
                <div className='left'>
                  <Font
                    fontSize='xlarge'
                    fontWeight='heavy'
                  >
                    A
                  </Font>
                  <Font>{choices[0].content}</Font>
                </div>
                <div className='right'>
                  <Font
                    fontSize='xlarge'
                    fontWeight='heavy'
                  >
                    B
                  </Font>
                  <Font>{choices[1].content}</Font>
                </div>
              </AnswerContainer>
            </Card>
          ))}
        </TinderLikeCard>
      </ContainerStyled>
      <TransparentButtonContainer>
        <button onClick={handleClickSwapLeft} />
        <button onClick={handleClickSwapRight} />
      </TransparentButtonContainer>
      <ContainerStyled
        $marginTop={`12px`}
        style={{ position: 'relative', right: '138px' }}
      >
        <SkipStyled onClick={handleClickSwapDown}>
          <Font color={700}>질문넘기기</Font>
          <Image
            src={SkipXIcon}
            alt='skip'
          />
        </SkipStyled>
      </ContainerStyled>
    </>
  );

  return (
    <MainStyled $isEmpty={isEmpty}>
      <ContainerStyled $marginTop={`36px`}>
        <Image
          src={HomeLogo}
          alt='Logo'
        />
      </ContainerStyled>
      {isEmpty ? (
        <ContainerStyled $marginTop={`48px`}>
          <Image
            src={EmptyCard}
            alt='empty card'
          />
        </ContainerStyled>
      ) : (
        CardContainer
      )}
      <FooterContainer>
        <Footer />
      </FooterContainer>
      <div style={{ position: 'relative', width: 0, height: 0 }}>
        <AddQuestion onClick={() => router.push(ROUTE_PATHS.newQuestion)}>
          <Image
            src={AddQuestionIcon}
            alt='add question'
          />
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            질문하기
          </Font>
        </AddQuestion>
      </div>
    </MainStyled>
  );
}
