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
  @media (max-width: 800px) {
    padding: 0px 8px;
  }
  @media (max-width: 390px) {
    padding: 0px 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 400px) {
    justify-content: start;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    max-width: 570px;
  }
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: white;
  color: ${(props) => props.theme.accentColor};
  @media (max-width: 800px) {
    font-size: 32px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
    margin-right: 12px;
  }
`;

export const ThemeBtn = styled.button`
  width: 32px;
  height: 32px;
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
  width: 100%;
  min-width: 140fpx;
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
  @media (max-width: 600px) {
    display: none;
  }
`;
