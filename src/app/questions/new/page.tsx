'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';

import point from '@/assets/point.svg';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import FormInputTemplate from '@/components/question/FormInputTemplate';
import useForm from '@/hooks/useForm';
import { getCategoryApi } from '@/services/category';
import { postQuestionApi } from '@/services/question';
import { getUserApi } from '@/services/user';

import {
  ButtonContainer,
  CharacterCount,
  ContentContainer,
  Count,
  CountContainer,
  InputTitle,
  Point,
  PointTitle,
  Textarea,
  TextareaWrapper,
  TitleStyled,
  Wrapper,
} from './styles';

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

const CHARACTER_LIMIT = 80;

const validationRules = {
  title: (value: string) =>
    value.length < 1 || value.length > 30
      ? '제목은 1자 이상 30자 이내여야 합니다.'
      : null,
  categoryId: (value: number) =>
    value === 0 ? '주제 선택은 필수 항목입니다.' : null,
  content: (value: string) =>
    value.length < 5 || value.length > 80
      ? '내용은 5자 이상 80자 이내여야 합니다.'
      : null,
  choiceA: (value: string) =>
    value.length < 1 || value.length > 20
      ? 'A 선택지는 1자 이상 20자 이내여야 합니다.'
      : null,
  choiceB: (value: string) =>
    value.length < 1 || value.length > 20
      ? 'B 선택지는 1자 이상 20자 이내여야 합니다.'
      : null,
};

export default function NewQuestion() {
  const router = useRouter();
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [reward, setReward] = useState<number>(0);
  const { formData, errors, onChange, validateForm } = useForm<FormData>(
    {
      userId: 1,
      categoryId: 0,
      title: '',
      content: '',
      choiceA: '',
      choiceB: '',
      closedAt: '',
    },
    validationRules,
  );

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
      setCategoryList(data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      const postData = async () => {
        await postQuestionApi({
          userId: formData.userId,
          categoryId: formData.categoryId,
          title: formData.title,
          content: formData.content,
          choices: [
            {
              content: formData.choiceA,
            },
            {
              content: formData.choiceB,
            },
          ],
          closedAt: (parseInt(formData.closedAt) || 1) * 24 * 60 * 60 * 1000,
        });
      };
      postData();
      router.push('/');
    }
  };

  const handleSelectChange = (value: string | number, name: string) => {
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
        <FormInputTemplate
          name='주제를 선택해주세요*'
          error={errors.categoryId}
        >
          <Select
            defaultValue='주제 선택'
            disabled={true}
            selectList={categoryList.map((category) => category.title)}
            selectedItem={formData.categoryId}
            setSelectedItem={(value) => {
              const selectedCategory = categoryList.find(
                (category) => value === category.title,
              );
              if (selectedCategory) {
                handleSelectChange(selectedCategory.id, 'categoryId');
              }
            }}
          />
        </FormInputTemplate>
        <FormInputTemplate
          name='제목을 적어주세요*'
          error={errors.title}
        >
          <InputTitle
            placeholder='30자 이내'
            name='title'
            value={formData.title}
            onChange={onChange}
          />
        </FormInputTemplate>
        <FormInputTemplate
          name='내용을 적어주세요(5자 이상~80자 이하)*'
          error={errors.content}
        >
          <TextareaWrapper>
            <Textarea
              name='content'
              value={formData.content}
              onChange={onChange}
              placeholder={
                formData.categoryId
                  ? categoryList.find(
                      (category) => category.id === formData.categoryId,
                    )?.content || ''
                  : `어떤 음식을 먹고 싶어?
음식 종류를 적어주면 결정에 도움이 됩니다.`
              }
            />
            <CharacterCount
              $isLimitExceeded={formData.content.length > CHARACTER_LIMIT}
            >
              {formData.content.length}/{CHARACTER_LIMIT}
            </CharacterCount>
          </TextareaWrapper>
        </FormInputTemplate>
        <FormInputTemplate
          name='A 선택지*'
          error={errors.choiceA}
        >
          <InputTitle
            placeholder='1자이상 ~ 20자이하'
            name='choiceA'
            value={formData.choiceA}
            onChange={onChange}
          />
        </FormInputTemplate>
        <FormInputTemplate
          name='B 선택지*'
          error={errors.choiceB}
        >
          <InputTitle
            placeholder='1자이상 ~ 20자이하'
            name='choiceB'
            value={formData.choiceB}
            onChange={onChange}
          />
        </FormInputTemplate>
        <FormInputTemplate
          name='마감기간'
          error={errors.closedAt}
        >
          <Select
            defaultValue='1일'
            selectList={['2일', '3일']}
            selectedItem={formData.closedAt}
            setSelectedItem={(value) => handleSelectChange(value, 'closedAt')}
          />
        </FormInputTemplate>
      </ContentContainer>
      <ButtonContainer>
        <Button width='full'>작성완료</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
