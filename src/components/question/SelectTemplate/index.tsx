import React, { ReactNode } from 'react';

import { Title, Wrapper } from './styles';

interface SelectTemplateProps {
  name: string;
  children: ReactNode;
}

export default function SelectTemplate({
  name,
  children,
}: SelectTemplateProps) {
  return (
    <Wrapper>
      <Title>{name}</Title>
      {children}
    </Wrapper>
  );
}
