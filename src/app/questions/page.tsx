'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import AllowIcon from '@/assets/AllowIcon.svg';
import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import AIResultCard from '@/components/question/AIResultCard';
import QuestionResultCard from '@/components/question/QuestionResultCard';
import useAIAnswer from '@/hooks/useAIAnswer';
import { getAllQuestionApi } from '@/services/question';

import {
  AllowContainer,
  CheckBox,
  CheckBoxContainer,
  ListContainer,
  QuestionResultCardContainer,
  SortContainer,
  Wrapper,
} from './styles';

export default function Questions() {
  const [sort, setSort] = useState<string>('recent');
  const [agree, setAgree] = useState<boolean>(false);
  const { questionList, setQuestionList, handleClickButton } = useAIAnswer([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllQuestionApi(1, sort, agree);
      setQuestionList(data);
    };
    getData();
  }, [sort, agree]);

  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            전체 질문 목록
          </Font>
        }
        canGoBack={true}
        canDone={false}
      />
      <SortContainer>
        <AllowContainer
          onClick={() => {
            setSort(sort === 'recent' ? 'popular' : 'recent');
          }}
        >
          <Image
            src={AllowIcon}
            alt='allow icon'
          />
          {sort === 'recent' ? <Font>최신순</Font> : <Font>인기순</Font>}
        </AllowContainer>
        <CheckBoxContainer>
          <label htmlFor='agree'>
            <CheckBox
              type='checkbox'
              id='agree'
              name='agree'
              checked={agree}
              onChange={() => {
                setAgree(!agree);
              }}
            />
            <Font>내가 답한 것만 보기</Font>
          </label>
        </CheckBoxContainer>
      </SortContainer>
      <ListContainer>
        {questionList?.map((question, index) => (
          <QuestionResultCardContainer key={index}>
            <QuestionResultCard question={question} />
            <AIResultCard
              question={question}
              onClick={handleClickButton}
            />
          </QuestionResultCardContainer>
        ))}
      </ListContainer>
      <Footer />
    </Wrapper>
  );
}
