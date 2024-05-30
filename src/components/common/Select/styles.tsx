'use client';

import styled from 'styled-components';

export const SelectStyle = styled.select`
  width: 100%;
  height: 3.25rem;
  padding: 0.875rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors[100]};
  border: 1px solid ${(props) => props.theme.colors[300]};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;
