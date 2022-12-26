import React from "react";
import * as S from "./styles";
import { MoonStars, Sun, MagnifyingGlass } from "phosphor-react";

function Header({ setTheme, theme }) {
  return (
    <S.Container>
      <S.Content>
        <h1>GitHub Timeline</h1>
        <div>
          <S.ThemeBtn onClick={() => setTheme(!theme)}>
            {!theme && <MoonStars size={32} color="#C9C9C9" weight="bold" />}
            {theme && <Sun size={32} color="#d8860b" weight="bold" />}
          </S.ThemeBtn>
          <S.Input type="search" name="search" placeholder="Nome do usuário" />
          <div>
            <MagnifyingGlass size={24} color={theme ? "#D8DFED" : "#4161A3"} />
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
}

export default Header;
