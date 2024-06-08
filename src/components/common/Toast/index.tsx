import { ReactNode } from 'react';

import { Content, ToastContainer } from './styles';

interface ToastProps {
  content: ReactNode;
  isVisible: boolean;
}

export default function Toast({ content, isVisible }: ToastProps) {
  return (
    <ToastContainer>
      <Content $isVisible={isVisible}>{content}</Content>
    </ToastContainer>
  );
}
