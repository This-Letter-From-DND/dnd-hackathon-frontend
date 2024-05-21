'use client';

import { useRef, useState } from 'react';
import { TinderLikeCard } from 'react-stack-cards';
import styled from 'styled-components';

interface Swipable {
  swipe: () => void;
}

export default function CardPage() {
  const CurrentCard = useRef<Swipable | null>(null);
  const [direction, setDirection] = useState(DIRECTION.LEFT);

  const handleClickButton = (direction: any) => {
    if (!CurrentCard.current) {
      return;
    }
    setDirection(direction);
    CurrentCard.current.swipe();
  };

  return (
    <Container>
      <TinderLikeCard
        images={arr}
        width='250'
        height='150'
        direction={direction}
        duration={400}
        ref={(node: any) => (CurrentCard.current = node)}
        className='tinder'
      >
        {numbers.map((i) => (
          <Card key={i}>{i}</Card>
        ))}
      </TinderLikeCard>
      <ButtonContainer>
        <button onClick={() => handleClickButton(DIRECTION.LEFT)}>
          Swipe Left
        </button>
        <button onClick={() => handleClickButton(DIRECTION.RIGHT)}>
          Swipe Right
        </button>
      </ButtonContainer>
    </Container>
  );
}

const arr = ['first', 'second', 'third', 'fourth'];
const numbers = [0, 1, 2, 3];
const DIRECTION = {
  LEFT: 'swipeLeft',
  RIGHT: 'swipeRight',
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  width: 250px;
  height: 150px;
  border: 1px solid orange;
  background-color: lightblue;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
