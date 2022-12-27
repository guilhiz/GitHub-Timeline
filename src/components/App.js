import Header from "./Header";
import React, { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

import "reset-css";
import Timeline from "./Timeline";

function App() {
  const [theme, setTheme] = useState(true);
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header setTheme={setTheme} theme={theme} setRepos={setRepos} setUsername={setUsername} />
        <Timeline theme={theme} repos={repos} username={username} />
      </ThemeProvider>
    </>
  );
}

export default App;
