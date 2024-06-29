import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.ul`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors[100]};
  padding-top: 10px;
`;

export const List = styled.li`
  width: 100%;
  height: 58px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.5rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
