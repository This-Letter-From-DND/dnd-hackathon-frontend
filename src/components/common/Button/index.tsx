import { ReactNode } from 'react';

import { ButtonStyle } from './styles';

interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderRadius?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  width,
  height,
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
      $height={height}
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
