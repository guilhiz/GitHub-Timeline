import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0px 10%;
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
  }
`;
