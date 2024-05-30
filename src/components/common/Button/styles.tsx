'use client';

import styled from 'styled-components';
interface ButtonStyleProps {
  $width?: string;
  $height?: string;
  $color?: string;
  $bgColor?: string;
  $hoverBgColor?: string;
  $borderRadius?: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '3.875rem'};
  background: ${({ $bgColor, theme }) => $bgColor || theme.colors.primary};
  color: ${({ $color, theme }) => $color || theme.colors[900]};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0.5rem'};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors[200]};
    cursor: not-allowed;
  }
`;
