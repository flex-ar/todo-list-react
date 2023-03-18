import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: hsl(220, 98%, 61%);
    --checkBorder: radial-gradient(circle at top left, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    --checkBackground: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    --title: hsl(236, 33%, 92%);
  }

  * {
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
  }


  body {
    background-color: ${props => props.theme.colors.bgBody};
    color: ${props => props.theme.colors.text};
    font-size: 1.125rem;
    height: 100vh;
    line-height: 1.5;
    overflow-x: hidden;
    padding: 2rem;
    width: 100vw;
  }
`;
