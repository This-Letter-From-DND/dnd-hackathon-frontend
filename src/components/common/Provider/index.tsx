'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/reset';

import { Global, Wrapper } from './styles';

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Global>{children}</Global>
      </Wrapper>
    </ThemeProvider>
  );
}
