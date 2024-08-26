import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }
  html, body {
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    color: ${(props) => props.theme.color.text};

    @media(max-width: 600px) {
        font-size: 14px;
    }
  }
`;
