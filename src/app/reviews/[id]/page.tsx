'use client';

import { useEffect } from 'react';

import Header from '@/components/common/Header';

import { ContentContainer, TitleStyled, Wrapper } from './styles';

interface ReviewDetailsProps {
  params: { id: string };
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <Wrapper>
      <Header
        title={<TitleStyled>{'후기상세'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <ContentContainer></ContentContainer>
    </Wrapper>
  );
}
