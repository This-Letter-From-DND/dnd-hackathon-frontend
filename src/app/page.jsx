'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { TinderLikeCard } from 'react-stack-cards';

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

import AddQuestionIcon from '@/assets/AddQuestionIcon.svg';
import BananaIcon from '@/assets/BananaIcon.svg';
import CardCharacter from '@/assets/CardCharacter.svg';
import CardProfile from '@/assets/CardProfile.svg';
import EmptyCard from '@/assets/EmptyCard.svg';
import HomeLogo from '@/assets/HomeLogo.svg';
import SkipXIcon from '@/assets/SkipXIcon.svg';
import Footer from '@/components/common/Footer';
import { postAnswerApi } from '@/services/answer';
import { getQuestionListReceiveApi } from '@/services/question';

export default function Home() {
  const router = useRouter();
  const CurrentCard = useRef(null);
  const CurrentQuestion = useRef(null);
  const [direction, setDirection] = useState(DIRECTION.LEFT);
  const [rewardCount, setRewardCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [questionList, setQuestionList] = useState([]);

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

  const postAnswer = async (body) => {
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

  const handleClickButton = (direction, newChoiceId) => {
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

  // 0은 질문넘기기를 뜻함
  // 1은 choices[0] 을 뜻함
  // 2은 choices[1] 을 뜻함
  const handleClickSwapLeft = () => handleClickButton(DIRECTION.LEFT, 1);
  const handleClickSwapRight = () => handleClickButton(DIRECTION.RIGHT, 2);
  const handleClickSwapDown = () => handleClickButton(DIRECTION.DOWN, 0);

  const CardContainer = (
    <>
      <ContainerStyled marginTop={`90px`}>
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
        marginTop={`-10px`}
        style={{
          position: 'relative',
          zIndex: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TinderLikeCard
          images={questionList}
          width='380'
          height='200'
          direction={direction}
          duration={400}
          ref={(node) => {
            console.log(node);
            if (
              node &&
              node.state.list
                .filter((element) => element.val)
                .every((element) => element.out === 'out')
            ) {
              setIsEmpty(true);
            }
            if (node && node?.state?.list) {
              const foundQuestion = node.state.list.find(
                (element) => element.out !== 'out',
              );
              CurrentQuestion.current = foundQuestion.val;
            }
            CurrentCard.current = node;
          }}
          className='tinder'
        >
          {questionList.map(({ questionId, title, content, choices }) => (
            <Card key={questionId}>
              <QuestionContainer>
                <Image
                  src={CardProfile}
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
        marginTop={`12px`}
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
      <ContainerStyled marginTop={`36px`}>
        <Image
          src={HomeLogo}
          alt='Logo'
        />
      </ContainerStyled>
      {isEmpty ? (
        <ContainerStyled marginTop={`48px`}>
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

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const CARD_LIST = [
//   {
//     id: 'a',
//     title: '일이삼사오육칠팔구',
//     description: '일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구',
//     left: '짜장asdfasdfadsfasdfasdfasdfasdfasdfad',
//     right: '짬뽕asdfasdfasdfasdfasdfasdfasdfa',
//   },
//   {
//     id: 'b',
//     title: '123234234234',
//     description: '123사오육칠팔구123사오육칠팔구일이삼사오육칠팔구',
//     left: '좌회전',
//     right: '우회전',
//   },
//   {
//     id: 'c',
//     title: '일이삼사오육칠팔구',
//     description: '일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구',
//     left: '왼손',
//     right: '오른손',
//   },
//   {
//     id: 'd',
//     title: '56785678',
//     description: '일이삼사6789일이삼사오6789오육칠팔구',
//     left: '123',
//     right: '가나다',
//   },
//   {
//     id: 'e',
//     title: '99999999',
//     description: '끝',
//     left: '잠온다',
//     right: '졸려',
//   },
// ];
const DIRECTION = {
  LEFT: 'swipeLeft',
  RIGHT: 'swipeRight',
  DOWN: 'swipeDown',
};
