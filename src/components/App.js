import Header from "./Header";
import React, {useState} from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

import "reset-css";
import Timeline from "./Timeline";

function App() {
  const [theme, setTheme] = useState(true)
  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header setTheme={setTheme} theme={theme} />
        <Timeline theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default App;
