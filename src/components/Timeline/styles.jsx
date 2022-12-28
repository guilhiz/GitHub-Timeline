import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  padding: 0px 35px;

  > h2 {
    color: ${(props) => props.theme.text};
    font-size: 32px;
    text-align: center;
    margin-top: 120px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 20px;
    line-height: 15px;
    font-weight: 700;
    color: ${(props) => props.theme.title};
  }

  p {
    color: ${(props) => props.theme.text};
  }

  .date-timeline {
    color: ${(props) => props.theme.text};
  }
  .vertical-timeline-element-content {
    ${(props) => props.switch && "background-color: black"};
    ${(props) => props.switch && "box-shadow: 0px 3px 0px #373737"};
    transition: all 300ms;
    cursor: pointer;
    :hover {
      background-color: ${(props) => (props.switch ? "#1a1a1a" : "#e6e6e6")};
    }
  }

  .vertical-timeline-element-icon {
    box-shadow: none;
    border: 4px solid #fff;
  }
`;

const loader = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin: 200px auto 0px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  border-left: 16px solid #3498db;
  width: 180px;
  height: 180px;
  animation: ${loader} 0.8s linear infinite;
`;
