import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GithubLogo } from "phosphor-react";
import * as S from "./styles";

function Timeline({ theme }) {
  return (
    <S.Container>
      <S.Content switch={theme}>
        <VerticalTimeline lineColor="#000">
          <VerticalTimelineElement
            className="vertical-timeline-element--project"
            iconStyle={{ background: "#1D2C49", width: "5%" }}
            icon={<GithubLogo size={32} color="#fff" weight="fill" />}
            date="24/08/2022"
            dateClassName="date-timeline"
          >
            <h3>TrackIt</h3>
            <p>TrackIt é um aplicativo que auxilia os usuários no desenvolvimento e manutenção de hábitos.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--project"
            iconStyle={{ background: "#1D2C49", width: "5%" }}
            icon={<GithubLogo size={32} color="#fff" weight="fill" />}
            date="24/08/2022"
            dateClassName="date-timeline"
          >
            <h3>Cineflex</h3>
            <p>
              O Cineflex é um aplicativo que simula uma bilheteria de cinema, auxiliando na compra de ingressos online.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--project"
            iconStyle={{ background: "#1D2C49", width: "5%" }}
            icon={<GithubLogo size={32} color="#fff" weight="fill" />}
            date="24/08/2022"
            dateClassName="date-timeline"
          >
            <h3>ZapRecall</h3>
            <p>
              ZapRecall é um app flashcards que pode ajudá-lo a estudar usando as abordagens Active Recall e Spaced
              Repetition.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </S.Content>
    </S.Container>
  );
}

export default Timeline;
