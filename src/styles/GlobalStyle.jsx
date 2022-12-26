import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  background-color: ${props => props.theme.background};
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default GlobalStyle;
