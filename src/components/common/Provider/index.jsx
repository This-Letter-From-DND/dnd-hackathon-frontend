'use client';

import { ThemeProvider } from 'styled-components';

import { Global, Wrapper } from './styles';

import { theme } from '@/styles/reset';

export default function Provider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Global>{children}</Global>
      </Wrapper>
    </ThemeProvider>
  );
}
