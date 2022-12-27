import React, { useState } from "react";
import { api } from "../../services";
import * as S from "./styles";
import { MoonStars, Sun, MagnifyingGlass } from "phosphor-react";

function Header({ setTheme, theme, setRepos, setUsername }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .get(`/${value}/repos`)
      .then((res) => {
        setRepos(res.data)
        setUsername(value)
        setValue("")
      })
      .catch((err) => console.log(err));
  };
  return (
    <S.Container>
      <S.Content>
        <h1>GitHub Timeline</h1>
        <form onSubmit={handleSubmit}>
          <S.ThemeBtn type="" onClick={() => setTheme(!theme)}>
            {!theme && <MoonStars size={32} color="#C9C9C9" weight="bold" />}
            {theme && <Sun size={32} color="#d8860b" weight="bold" />}
          </S.ThemeBtn>
          <S.Input
            type="search"
            name="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Nome do usuário"
          />
          <S.SubmitBtn type="submit">
            <MagnifyingGlass size={24} color={theme ? "#D8DFED" : "#4161A3"} />
          </S.SubmitBtn>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default Header;
