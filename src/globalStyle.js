import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
    height: 100%;
    background-color:currentColor;
}
* {
    margin: 0;
    padding: 0;
    box- sizing: border-box;
  }
`;

export default GlobalStyle;
