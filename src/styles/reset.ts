import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.font.fontFamily};
    color: ${(props) => props.theme.colors[900]};
  }
`;

export default GlobalStyle;
