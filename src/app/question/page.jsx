'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  ContentContainer,
  Count,
  CountContainer,
  InputTitle,
  Point,
  PointTitle,
  SelectContainer,
  Textarea,
  TitleStyled,
  Wrapper,
} from './styles';

import point from '../../assets/point.svg';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import SelectTemplate from '@/components/question/SelectTemplate';

export default function Question() {
  const [list, setList] = useState([]);
  return (
    <Wrapper>
      <Header title={<TitleStyled>{'골라골라 고릴라'}</TitleStyled>} />
      <Point>
        <PointTitle>보유바나나</PointTitle>
        <CountContainer>
          <Image
            src={point}
            alt='point'
          />
          <Count>100</Count>
        </CountContainer>
      </Point>
      <ContentContainer>
        <SelectContainer>
          <Select
            defaultValue='주제 선택'
            selectList={[1, 2, 3]}
            selectedItem={list}
            setSelectedItem={setList}
          />
        </SelectContainer>
        <InputTitle placeholder='텍스트홀더'></InputTitle>
        <Textarea>답변 요청시 아래 내용을 포함해 주세요.</Textarea>
        <SelectTemplate name='A 선택지'>
          <InputTitle placeholder='텍스트홀더'></InputTitle>
        </SelectTemplate>
        <SelectTemplate name='B 선택지'>
          <InputTitle placeholder='텍스트홀더'></InputTitle>
        </SelectTemplate>
        <SelectTemplate name='마감기간'>
          <Select
            defaultValue='1일/2일/3일'
            selectList={[1, 2, 3]}
            selectedItem={list}
            setSelectedItem={setList}
          />
        </SelectTemplate>
      </ContentContainer>
    </Wrapper>
  );
}
