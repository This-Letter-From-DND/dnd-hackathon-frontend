'use client';

import React from 'react';
import { StackedCarousel } from 'react-card-stack-carousel';

import 'react-card-stack-carousel/styles/styles.css';
import { Container, Wrapper } from './styles';

export default function Test() {
  return (
    <Wrapper>
      <StackedCarousel height='400 md:500 lg:750'>
        <Container>
          <h3>대전 맛집 추천해주세요!</h3>
          <button
            onClick={() => {
              alert('1');
            }}
          >
            답변하기
          </button>
        </Container>
        <Container>
          <h3>강원도 약국 알려주세요!</h3>
          <button
            onClick={() => {
              alert('2');
            }}
          >
            답변하기
          </button>
        </Container>
        <Container>
          <h3>경상도 맛집추천해주세요~</h3>
          <button
            onClick={() => {
              alert('3');
            }}
          >
            답변하기
          </button>
        </Container>
        <Container>
          <h3>부산 명소 추천해주세요~</h3>
          <button
            onClick={() => {
              alert('4');
            }}
          >
            답변하기
          </button>
        </Container>
        <Container>
          <h3>충청도 사투리 알려주세요~</h3>
          <button
            onClick={() => {
              alert('5');
            }}
          >
            답변하기
          </button>
        </Container>
      </StackedCarousel>
    </Wrapper>
  );
}
