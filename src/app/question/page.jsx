'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  ButtonContainer,
  ContentContainer,
  Count,
  CountContainer,
  InputTitle,
  Point,
  PointTitle,
  Textarea,
  TitleStyled,
  Wrapper,
} from './styles';

import point from '../../assets/point.svg';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import SelectTemplate from '@/components/question/SelectTemplate';
import useForm from '@/hooks/useForm';
import { getCategoryApi } from '@/services/category';
import { postQuestionApi } from '@/services/question';

export default function Question() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const { formData, onChange } = useForm({
    userId: 1,
    categoryId: '',
    title: '',
    content: '',
    choiceA: '',
    choiceB: '',
    closedAt: '',
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const postData = async () => {
      const data = await getCategoryApi();
      setList(data);
    };
    postData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = async () => {
      await postQuestionApi({
        userId: 1,
        categoryId: formData.categoryId || 1,
        title: formData.titl || '',
        content: formData.content || '',
        choices: [
          {
            content: formData.choiceA || '',
          },
          {
            content: formData.choiceB || '',
          },
        ],
        closedAt:
          formData.closedAt.slice(0, 1) * 24 * 60 * 60 * 1000 ||
          24 * 60 * 60 * 1000,
      });
    };
    postData();
    router.push('/');
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Header
        title={<TitleStyled>{'질문하기'}</TitleStyled>}
        canGoBack={true}
      />
      <Point>
        <PointTitle>보유 중인 바나나</PointTitle>
        <CountContainer>
          <Image
            src={point}
            alt='point'
          />
          <Count>100</Count>
        </CountContainer>
      </Point>
      <ContentContainer>
        <SelectTemplate name='주제를 선택해주세요*'>
          <Select
            defaultValue='주제 선택'
            selectList={list.map((el) => el.title)}
            label='categoryId'
            selectedItem={formData.categoryId}
            setSelectedItem={(value) =>
              onChange({
                target: {
                  name: 'categoryId',
                  value: list.filter((el) => value === el.title)[0].id,
                },
              })
            }
          />
        </SelectTemplate>
        <SelectTemplate name='제목을 적어주세요*'>
          <InputTitle
            placeholder='30자 이내'
            name='title'
            value={formData.title}
            onChange={onChange}
          ></InputTitle>
        </SelectTemplate>
        <SelectTemplate name='내용을 적어주세요(5자 이상~80자 이하)*'>
          <Textarea
            name='content'
            value={formData.content}
            onChange={onChange}
            placeholder={
              formData.categoryId
                ? list.filter((el) => el.id === formData.categoryId)[0].content
                : `어떤 음식을 먹고 싶어?
음식 종류를 적어주면 결정에 도움이 됩니다.
                `
            }
          ></Textarea>
        </SelectTemplate>
        <SelectTemplate name='A 선택지*'>
          <InputTitle
            placeholder='1자이상 ~ 20자이하'
            name='choiceA'
            value={formData.aChoice}
            onChange={onChange}
          ></InputTitle>
        </SelectTemplate>
        <SelectTemplate name='B 선택지'>
          <InputTitle
            placeholder='1자이상 ~ 20자이하'
            name='choiceB'
            value={formData.bChoice}
            onChange={onChange}
          ></InputTitle>
        </SelectTemplate>
        <SelectTemplate name='마감기간'>
          <Select
            defaultValue='기간 선택'
            selectList={['1일', '2일', '3일']}
            label='closedAt'
            selectedItem={formData.closedAt}
            setSelectedItem={(value) =>
              onChange({ target: { name: 'closedAt', value } })
            }
          />
        </SelectTemplate>
        <ButtonContainer>
          <Button width='full'>작성완료</Button>
        </ButtonContainer>
      </ContentContainer>
    </Wrapper>
  );
}
