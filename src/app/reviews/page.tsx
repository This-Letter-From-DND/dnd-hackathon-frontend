'use client';

import { useEffect, useState } from 'react';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import RadioButtonGroup from '@/components/review/RadioButtonGroup';
import ReviewItem from '@/components/review/ReviewItem';
import { getCategoryApi } from '@/services/category';

import { ListContainer, ReviewContainer, TitleStyled, Wrapper } from './styles';

interface Category {
  id: number;
  title: string;
  content: string;
}

export default function Page() {
  const [category, setCategory] = useState('전체');
  const [list, setList] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategoryApi();
      setList([{ id: 0, title: '전체', content: '전체' }, ...data]);
    };
    fetchCategories();
  }, []);

  return (
    <Wrapper>
      <Header
        title={<TitleStyled>{'전체후기'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <ReviewContainer>
        <RadioButtonGroup
          setRadioButtonItem={setCategory}
          radioButtonlist={list}
          radioButtonItem={category}
          label='gender'
        />
        <ListContainer>
          <ReviewItem />
        </ListContainer>
      </ReviewContainer>
      <Footer />
    </Wrapper>
  );
}
