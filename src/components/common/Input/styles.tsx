'use client';

import styled from 'styled-components';

interface InputStyleProps {
  $width?: string;
  $height?: string;
  $color?: string;
  $bgColor?: string;
  $borderColor?: string;
  $focusBorderColor?: string;
  $borderRadius?: string;
}

export const InputStyle = styled.input<InputStyleProps>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '3.25rem'};
  border: 1px solid
    ${({ $borderColor, theme }) => $borderColor || theme.colors[300]};
  padding: 0.875rem;
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.colors[100]};
  color: ${({ $color, theme }) => $color || theme.colors[900]};

  &:focus {
    border-color: ${({ $focusBorderColor, theme }) =>
      $focusBorderColor || theme.colors.primary};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors[200]};
    cursor: not-allowed;
  }
`;
