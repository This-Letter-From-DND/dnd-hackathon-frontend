'use client';

import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: inline-block;
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
  font-weight: bold;
  color: ${({ $color }) => $color || 'white'};
  background-color: ${({ $bgColor }) => $bgColor || '#0070f3'};
  border: none;
  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || '#005bb5'};
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;
