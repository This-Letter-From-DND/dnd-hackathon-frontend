'use client';

import React, { useEffect } from 'react';
import { StackedCarousel } from 'react-card-stack-carousel';

import 'react-card-stack-carousel/styles/styles.css';
import { Container, Wrapper } from './styles';

import { postAnswerApi } from '@/services/answer';
import { getQuestionApi, postQuestionApi } from '@/services/question';
import { getUserApi, postUserApi, putUserApi } from '@/services/user';

export default function Test() {
  useEffect(() => {
    const test = async () => {
      const data = await getUserApi(1);
      console.log('get으로 받아온 user 데이터', data);
    };
    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      const data = await postUserApi({
        email: 'a@gmail.com',
        password: '12345678',
        nickname: 'b',
        categoryId: '1,6,9',
      });
      console.log('post로 받아온 user 데이터', data);
    };
    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      const data = await getQuestionApi('1');
      console.log('get으로 받아온 question 데이터', data);
    };
    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      const data = await putUserApi({
        email: 'effirin8@gmail.com',
        password: 12345678,
      });
      console.log('put으로 받아온 question 데이터', data);
    };
    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      const data = await postQuestionApi({
        userId: 1,
        categoryId: '3',
        title: '잠을 잔다? 안 잔다?',
        content: '슬슬 많이 졸린데... 잘까 말까...............',
        choices: [
          {
            content: '잔다',
          },
          {
            content: '안 잔다',
          },
        ],
        closedAt: 1716197246000,
      });
      console.log('post로 받아온 question 데이터', data);
    };
    test();
  }, []);

  useEffect(() => {
    const test = async () => {
      const data = await postAnswerApi({
        userId: 1,
        questionId: 2,
        choiceId: 2,
        reason: '',
      });
      console.log('answer 받아온 question 데이터', data);
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
