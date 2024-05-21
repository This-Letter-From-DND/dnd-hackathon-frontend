import styled from 'styled-components';

interface WrapperProps {
  theme: {
    font: {
      colors: {
        black: string;
      };
    };
  };
}

interface GlobalProps {
  theme: {
    layout: {
      minWidth: {
        mobile: string;
      };
    };
    colors: {
      background: {
        primary: string;
      };
    };
  };
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.font.colors.black};
`;

export const Global = styled.div<GlobalProps>`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  height: 100%;
  background-color: ${(props) => props.theme.colors.background.primary};
`;
