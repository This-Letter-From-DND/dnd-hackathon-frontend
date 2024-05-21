'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';

import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import SelectTemplate from '@/components/question/SelectTemplate';
import useForm from '@/hooks/useForm';
import { getCategoryApi } from '@/services/category';
import { postQuestionApi } from '@/services/question';
import { getUserApi } from '@/services/user';

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

interface Category {
  id: number;
  title: string;
  content: string;
}

interface FormData {
  userId: number;
  categoryId: number;
  title: string;
  content: string;
  choiceA: string;
  choiceB: string;
  closedAt: string;
}

export default function Question() {
  const router = useRouter();
  const [list, setList] = useState<Category[]>([]);
  const [reward, setReward] = useState<number>(0);
  const { formData, onChange } = useForm<FormData>({
    userId: 1,
    categoryId: 0,
    title: '',
    content: '',
    choiceA: '',
    choiceB: '',
    closedAt: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserApi(1);
      setReward(data?.rewardCount);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategoryApi();
      setList(data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const postData = async () => {
      await postQuestionApi({
        userId: 1,
        categoryId: formData.categoryId || 1,
        title: formData.title || '',
        content: formData.content || '',
        choices: [
          {
            content: formData.choiceA || '',
          },
          {
            content: formData.choiceB || '',
          },
        ],
        closedAt: (parseInt(formData.closedAt) || 1) * 24 * 60 * 60 * 1000,
      });
    };
    postData();
    router.push('/');
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSelectChange = (value: string, name: string) => {
    const event = {
      target: {
        name,
        value,
      },
    } as ChangeEvent<HTMLInputElement>;

    onChange(event);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Header
        title={<TitleStyled>{'질문하기'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <Point>
        <PointTitle>보유 중인 바나나</PointTitle>
        <CountContainer>
          <Image
            src={point}
            alt='point'
          />
          <Count>{reward}</Count>
        </CountContainer>
      </Point>
      <ContentContainer>
        <SelectTemplate name='주제를 선택해주세요*'>
          <Select
            defaultValue='주제 선택'
            selectList={list.map((el) => el.title)}
            selectedItem={formData.categoryId.toString()}
            setSelectedItem={(value) => {
              const selectedCategory = list.find((el) => value === el.title);
              if (selectedCategory) {
                handleSelectChange(
                  selectedCategory.id.toString(),
                  'categoryId',
                );
              }
            }}
          />
        </SelectTemplate>
        <SelectTemplate name='제목을 적어주세요*'>
          <InputTitle
            placeholder='30자 이내'
            name='title'
            value={formData.title}
            onChange={onChange}
          />
        </SelectTemplate>
        <SelectTemplate name='내용을 적어주세요(5자 이상~80자 이하)*'>
          <Textarea
            name='content'
            value={formData.content}
            onChange={onChange}
            placeholder={
              formData.categoryId
                ? list.find((el) => el.id === formData.categoryId)?.content ||
                  ''
                : `어떤 음식을 먹고 싶어?
음식 종류를 적어주면 결정에 도움이 됩니다.`
            }
          />
        </SelectTemplate>
        <SelectTemplate name='A 선택지*'>
          <InputTitle
            placeholder='1자이상 ~ 20자이하'
            name='choiceA'
            value={formData.choiceA}
            onChange={onChange}
          />
        </SelectTemplate>
        <SelectTemplate name='B 선택지*'>
          <InputTitle
            placeholder='1자이상 ~ 20자이하'
            name='choiceB'
            value={formData.choiceB}
            onChange={onChange}
          />
        </SelectTemplate>
        <SelectTemplate name='마감기간'>
          <Select
            defaultValue='기간 선택'
            selectList={['1일', '2일', '3일']}
            selectedItem={formData.closedAt}
            setSelectedItem={(value) => handleSelectChange(value, 'closedAt')}
          />
        </SelectTemplate>
      </ContentContainer>
      <ButtonContainer>
        <Button width='full'>작성완료</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
