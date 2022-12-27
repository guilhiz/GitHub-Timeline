import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0px 3% 0px 10%;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.header};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 42px;
    font-weight: 700;
    color: white;
    color: ${(props) => props.theme.accentColor};
  }
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    position: relative;
  }
`;

export const ThemeBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  margin-right: 10px;
  :active {
    scale: 0.9;
  }
  :hover {
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
  border-color: ${(props) => props.theme.background};
  padding: 0px 10px;

  color: ${(props) => props.theme.text};
  font-size: 18px;
  line-height: 22px;
  ::placeholder {
    color: ${(props) => props.theme.text};
    font-size: 16px;
    line-height: 20px;
  }
  :focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 3%;
  top: 5%;
  cursor: pointer;
`;
