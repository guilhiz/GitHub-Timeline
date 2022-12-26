import Header from "./Header";
import React, {useState} from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

import "reset-css";

function App() {
  const [theme, useTheme] = useState(true)
  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <h1>Salve Cria</h1>
      </ThemeProvider>
    </>
  );
}

export default App;