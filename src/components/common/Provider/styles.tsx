import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    font-family: ${(props) => props.theme.font.fontFamily};
    color: ${(props) => props.theme.colors[900]};
  }
`;

export const Global = styled.div`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  height: 100%;
  background-color: ${(props) => props.theme.colors[100]};
`;
