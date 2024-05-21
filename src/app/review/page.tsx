'use client';

import Image from 'next/image';
import styled from 'styled-components';

import empty from '@/assets/empty.svg';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ImageContainer, TitleStyled, Wrapper } from './styles';

export default function Page() {
  return (
    <Wrapper>
      <Header
        title={<TitleStyled>{'전체후기'}</TitleStyled>}
        canGoBack={true}
        canDone={false}
      />
      <ImageContainer>
        <Image
          src={empty}
          alt='empty'
        />
      </ImageContainer>
      <Footer />
    </Wrapper>
  );
}
