import Header from "./Header";
import React, { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

import "reset-css";
import Timeline from "./Timeline";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header
          setTheme={setTheme}
          theme={theme}
          setRepos={setRepos}
          setUsername={setUsername}
          setLoading={setLoading}
        />
        <Timeline theme={theme} repos={repos} username={username} loading={loading} />
      </ThemeProvider>
    </>
  );
}

export default App;
