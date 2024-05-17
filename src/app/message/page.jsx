'use client';

import React, { useEffect } from 'react';
import { StackedCarousel } from 'react-card-stack-carousel';

import 'react-card-stack-carousel/styles/styles.css';
import { Container, Wrapper } from './styles';

import { getTestApi, postTestApi } from '@/services';

export default function Test() {
  useEffect(() => {
    const test = async () => {
      const data = await getTestApi();
      console.log('get으로 받아온 데이터', data);
    };

    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      const data = await postTestApi({
        name: '테스트입니다',
      });
      console.log('post로 받아온 데이터', data);
    };
    test();
  }, []);

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
