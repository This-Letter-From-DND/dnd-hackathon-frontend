import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.font.colors.black};
`;

export const Global = styled.div`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  height: 100%;
  background-color: ${(props) => props.theme.colors.background.primary};
`;
