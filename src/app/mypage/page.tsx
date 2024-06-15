'use client';

import Font from '@/components/common/Font';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

import { ListContainer, Wrapper } from './styles';

export default function MyPage() {
  return (
    <Wrapper>
      <Header
        title={
          <Font
            fontSize='large'
            fontWeight='bold'
          >
            마이페이지
          </Font>
        }
        canGoBack={true}
        canDone={false}
      />
      <ListContainer></ListContainer>
      <Footer />
    </Wrapper>
  );
}
