'use client';

import { TitleStyled } from './styles';

import Header from '@/components/common/Header';

export default function Home() {
  return (
    <main>
      <Header title={<TitleStyled>{'골라골라 고릴라'}</TitleStyled>} />
    </main>
  );
}
