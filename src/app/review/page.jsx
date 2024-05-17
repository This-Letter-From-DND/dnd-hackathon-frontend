'use client';

import styled from 'styled-components';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function Page() {
  return (
    <Wrapper>
      <Header
        title={<TitleStyled>{'전체후기'}</TitleStyled>}
        canGoBack={true}
      />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
}

export const FooterContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
