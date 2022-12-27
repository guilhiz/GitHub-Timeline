import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: ${props => props.theme.background};
  transition: all 300ms;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default GlobalStyle;
