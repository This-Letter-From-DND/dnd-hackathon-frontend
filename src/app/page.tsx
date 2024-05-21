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
import SkipXIcon from '@/assets/SkipXIcon.svg';
import Footer from '@/components/common/Footer';
import { postAnswerApi } from '@/services/answer';
import { getQuestionListReceiveApi } from '@/services/question';

import {
  AddQuestion,
  AnswerContainer,
  BananaCountStyled,
  Card,
  ContainerStyled,
  FooterContainer,
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
    try {
      const response = await getQuestionListReceiveApi(1);
      setRewardCount(response.rewardCount);
      setQuestionList(response.questions);
      if (response.questions.length > 0) {
        setIsEmpty(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const postAnswer = async (body: {
    userId: number;
    questionId: number;
    choiceId: number;
  }) => {
    try {
      const response = await postAnswerApi(body);
      setRewardCount(response.rewardCount);
    } catch (error) {
      console.log(error);
    }
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
          <span className='mgr_4'>{'보유 바나나'}</span>
          <Image
            src={BananaIcon}
            alt='banana count'
          />
          <span className='count'>{rewardCount}</span>
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
            console.log(node);
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
                <Image
                  src={getCardProfile()}
                  alt='profile'
                />
                <div className='card-title'>{title}</div>
                <div className='card-description'>{content}</div>
              </QuestionContainer>
              <AnswerContainer>
                <div className='left'>
                  <div className='card-title'>{'A'}</div>
                  <div className='card-description'>{choices[0].content}</div>
                </div>
                <div className='right'>
                  <div className='card-title'>{'B'}</div>
                  <div className='card-description'>{choices[1].content}</div>
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
          {'질문넘기기 '}
          <Image
            src={SkipXIcon}
            alt='skip'
          />
        </SkipStyled>
      </ContainerStyled>
    </>
  );

  return (
    <MainStyled>
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
        <AddQuestion onClick={() => router.push('/question')}>
          <Image
            src={AddQuestionIcon}
            alt='add question'
          />
          <span>질문하기</span>
        </AddQuestion>
      </div>
    </MainStyled>
  );
}
