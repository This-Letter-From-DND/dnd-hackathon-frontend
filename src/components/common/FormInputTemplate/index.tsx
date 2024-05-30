import React, { ReactNode } from 'react';

import Font from '@/components/common/Font';

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
  const parts = name.split('*').map((part, index) =>
    index === 1 ? (
      <Font
        key={index}
        color='error'
        fontWeight='bold'
      >
        *
      </Font>
    ) : (
      <Font
        key={index}
        fontWeight='bold'
      >
        {part}
      </Font>
    ),
  );

  return (
    <Wrapper>
      <Title>{parts}</Title>
      {children}
      {error && (
        <Error>
          <Font
            color='error'
            fontSize='small'
          >
            {error}
          </Font>
        </Error>
      )}
    </Wrapper>
  );
}
