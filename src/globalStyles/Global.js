import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  p {
    font-size: 1.2em;
  }
  h2 {
    font-size: 2.4em;
    margin-left: -0.5em;
  }
  h3 {
    font-size: 2.0em;
  }
  `;

export default GlobalStyle;
