import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
