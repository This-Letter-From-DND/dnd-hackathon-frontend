'use client';

import { useEffect, useState } from 'react';

import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import RadioButtonGroup from '@/components/review/RadioButtonGroup';
import ReviewItem from '@/components/review/ReviewItem';
import { getCategoryApi } from '@/services/category';
import { getReviewListlAPI } from '@/services/review';

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
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategoryApi();
      setList([{ id: 0, title: '전체', content: '전체' }, ...data]);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviewListlAPI();
      setReviews(data.content);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            전체후기
          </Font>
        }
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
          {reviews.map((review, index) => (
            <ReviewItemContainer key={index}>
              <ReviewItem review={review} />
            </ReviewItemContainer>
          ))}
        </ListContainer>
      </ReviewContainer>
      <Footer />
    </Wrapper>
  );
}
