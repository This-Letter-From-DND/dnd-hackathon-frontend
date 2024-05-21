import { ReactNode } from 'react';
import { BoxStyle } from './styles';

interface BoxProps {
  children: ReactNode;
}

export default function Box({ children }: BoxProps) {
  return <BoxStyle>{children}</BoxStyle>;
}
