import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  background-color: #EEF0F6;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default GlobalStyle;
