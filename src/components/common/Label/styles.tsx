'use client';

import styled from 'styled-components';

interface LabelStyleProps {
  $width?: string;
  $size?: 'small' | 'medium' | 'large';
  $color?: string;
  $bgColor?: string;
  $borderColor?: string;
  $focusBorderColor?: string;
  $borderRadius?: string;
}

export const LabelStyle = styled.div<LabelStyleProps>`
  width: ${({ $width }) => {
    switch ($width) {
      case 'full':
        return '100%';
      default:
        return '';
    }
  }};
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '0.5rem';
      case 'large':
        return '1rem';
      default:
        return '0.75rem';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '0.875rem';
      case 'large':
        return '1.25rem';
      default:
        return '1rem';
    }
  }};
  color: ${({ $color }) => $color || '#000'};
  background-color: ${({ $bgColor }) => $bgColor || '#fff'};
  border: 1px solid ${({ $borderColor }) => $borderColor || '#ccc'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};
  box-sizing: border-box;

  &:focus {
    border-color: ${({ $focusBorderColor }) => $focusBorderColor || '#0070f3'};
    outline: none;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;
