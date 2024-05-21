'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { Global, Wrapper } from './styles';
import { theme } from '@/styles/reset';

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
