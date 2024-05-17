'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
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

export default function Home() {
  const router = useRouter();
  const CurrentCard = useRef(null);
  const [direction, setDirection] = useState(DIRECTION.LEFT);
  const [bananaCount, setBananaCount] = useState(100);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleClickButton = (direction) => {
    if (!CurrentCard.current) {
      return;
    }
    setDirection(direction);
    CurrentCard.current.swipe();
    setBananaCount((prev) => prev + 10);
  };

  const handleClickSwapLeft = () => handleClickButton(DIRECTION.LEFT);
  const handleClickSwapRight = () => handleClickButton(DIRECTION.RIGHT);
  const handleClickSwapDown = () => handleClickButton(DIRECTION.DOWN);

  const CardContainer = (
    <>
      <ContainerStyled marginTop={`90px`}>
        <BananaCountStyled>
          <span className='mgr_4'>{'보유 바나나'}</span>
          <Image
            src={BananaIcon}
            alt='banana count'
          />
          <span className='count'>{bananaCount}</span>
        </BananaCountStyled>
      </ContainerStyled>
      <div style={{ position: 'relative', width: 0, height: 0 }}>
        <Image
          src={CardCharacter}
          alt='Character'
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '-52px',
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
          images={arr}
          width='380'
          height='246'
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
            CurrentCard.current = node;
          }}
          className='tinder'
        >
          {CARD_LIST.map(({ id, title, description, left, right }) => (
            <Card key={id}>
              <QuestionContainer>
                <Image
                  src={CardProfile}
                  alt='profile'
                />
                <div className='card-title'>{title}</div>
                <div className='card-description'>{description}</div>
              </QuestionContainer>
              <AnswerContainer>
                <div className='left'>
                  <div className='card-title'>{'A'}</div>
                  <div className='card-description'>{left}</div>
                </div>
                <div className='right'>
                  <div className='card-title'>{'B'}</div>
                  <div className='card-description'>{right}</div>
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

const arr = ['a', 'b', 'c', 'd', 'e'];
const CARD_LIST = [
  {
    id: 'a',
    title: '일이삼사오육칠팔구',
    description: '일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구',
    left: '짜장asdfasdfadsfasdfasdfasdfasdfasdfad',
    right: '짬뽕asdfasdfasdfasdfasdfasdfasdfa',
  },
  {
    id: 'b',
    title: '123234234234',
    description: '123사오육칠팔구123사오육칠팔구일이삼사오육칠팔구',
    left: '좌회전',
    right: '우회전',
  },
  {
    id: 'c',
    title: '일이삼사오육칠팔구',
    description: '일이삼사오육칠팔구일이삼사오육칠팔구일이삼사오육칠팔구',
    left: '왼손',
    right: '오른손',
  },
  {
    id: 'd',
    title: '56785678',
    description: '일이삼사6789일이삼사오6789오육칠팔구',
    left: '123',
    right: '가나다',
  },
  {
    id: 'e',
    title: '99999999',
    description: '끝',
    left: '잠온다',
    right: '졸려',
  },
];
const DIRECTION = {
  LEFT: 'swipeLeft',
  RIGHT: 'swipeRight',
  DOWN: 'swipeDown',
};
