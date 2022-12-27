import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  padding: 0px 35px;
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

  .vertical-timeline-element--project {
    .date-timeline {
      color: ${(props) => props.theme.text};
    }
    .vertical-timeline-element-content {
      ${(props) => props.switch && "background-color: black"};
      ${(props) => props.switch && "box-shadow: 0px 3px 0px #373737"};
      transition: all 500ms;
    }
  }
`;
