import React, { ReactNode } from 'react';
import { InputTemplateStyle, Name, Content } from './styles';

interface InputTemplateProps {
  name: string;
  children: ReactNode;
}

export default function InputTemplate({ name, children }: InputTemplateProps) {
  return (
    <InputTemplateStyle>
      <Name>{name}</Name>
      <Content>{children}</Content>
    </InputTemplateStyle>
  );
}
