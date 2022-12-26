import React from "react";
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <S.Content>
        <h1>GitHub Timeline</h1>
        <input type="search" name="search" />
      </S.Content>
    </S.Container>
  );
}

export default Header;
