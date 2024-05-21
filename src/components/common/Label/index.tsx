import React from 'react';

import { LabelStyle } from './styles';

interface LabelProps {
  width?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  borderRadius?: string;
}

export default function Label({
  width,
  size = 'medium', // default value
  color,
  bgColor,
  borderColor,
  focusBorderColor,
  borderRadius,
}: LabelProps) {
  return (
    <LabelStyle
      $width={width}
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $borderColor={borderColor}
      $focusBorderColor={focusBorderColor}
      $borderRadius={borderRadius}
    />
  );
}
