import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --BrightBlue: hsl(220, 98%, 61%);
    --CheckBorder: radial-gradient(circle at top left, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    --CheckBackground: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    --VeryLightGrayishBlue: hsl(236, 33%, 92%);
  }

  * {
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgBody};
    height: 100vh;
    line-height: 1.5;
    overflow-x: hidden;
    padding: 32px;
    width: 100vw;
  }
`;
