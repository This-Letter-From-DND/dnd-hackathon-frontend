import { ReactNode } from 'react';

import { ButtonStyle } from './styles';

interface ButtonProps {
  width?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderRadius?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  width,
  size,
  color,
  bgColor,
  hoverBgColor,
  borderRadius,
  onClick,
  children,
}: ButtonProps) {
  return (
    <ButtonStyle
      $width={width}
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $hoverBgColor={hoverBgColor}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}
