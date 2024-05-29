'use client';

import { useEffect, useState } from 'react';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import RadioButtonGroup from '@/components/review/RadioButtonGroup';
import ReviewItem from '@/components/review/ReviewItem';
import { getCategoryApi } from '@/services/category';

import {
  CategoryContainer,
  ListContainer,
  ReviewContainer,
  ReviewItemContainer,
  Wrapper,
} from './styles';

interface Category {
  id: number;
  title: string;
  content: string;
}

export default function Reviews() {
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
        title='전체후기'
        canGoBack={true}
        canDone={false}
      />
      <CategoryContainer>
        <RadioButtonGroup
          setRadioButtonItem={setCategory}
          radioButtonlist={list}
          radioButtonItem={category}
          label='gender'
        />
      </CategoryContainer>
      <ReviewContainer>
        <ListContainer>
          <ReviewItemContainer>
            <ReviewItem />
          </ReviewItemContainer>
        </ListContainer>
      </ReviewContainer>
      <Footer />
    </Wrapper>
  );
}
