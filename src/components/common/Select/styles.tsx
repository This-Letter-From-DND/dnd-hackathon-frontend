'use client';

import styled from 'styled-components';

export const SelectStyle = styled.select`
  width: 100%;
  height: 3.25rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors[100]};
`;
