import React, { ReactNode } from 'react';

import { Error, Title, Wrapper } from './styles';

interface FormInputTemplateProps {
  name: string;
  error?: string | null;
  children: ReactNode;
}

export default function FormInputTemplate({
  name,
  error,
  children,
}: FormInputTemplateProps) {
  return (
    <Wrapper>
      <Title>{name}</Title>
      {children}
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}
