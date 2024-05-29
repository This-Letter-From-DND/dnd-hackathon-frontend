'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/reset';
import { theme } from '@/styles/theme';

import { Global, Wrapper } from './styles';

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Global>{children}</Global>
      </Wrapper>
    </ThemeProvider>
  );
}
