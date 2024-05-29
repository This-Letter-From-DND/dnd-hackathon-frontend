'use client';

import styled from 'styled-components';

interface ButtonStyleProps {
  $width?: string;
  $size?: 'small' | 'medium' | 'large';
  $color?: string;
  $bgColor?: string;
  $hoverBgColor?: string;
  $borderRadius?: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  display: inline-block;
  width: ${({ $width }) => {
    switch ($width) {
      case 'full':
        return '100%';
      default:
        return '';
    }
  }};
  height: 4rem;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '0.5rem 1rem';
      case 'large':
        return '1rem 2rem';
      default:
        return '0.75rem 1.5rem';
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
  color: ${(props) => props.theme.colors[900]};
  background-color: ${({ $bgColor }) => $bgColor || '#FFCA0C'};
  border: none;
  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
  font-weight: ${(props) => props.theme.font.fontWeights.bold};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors[200]};
    cursor: not-allowed;
  }
`;
