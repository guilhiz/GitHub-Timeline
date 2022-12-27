import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { api } from "../../services";
import "react-vertical-timeline-component/style.min.css";
import { GithubLogo } from "phosphor-react";
import * as S from "./styles";
const mock = [
  {
    name: "TrackIt",
    data: "24/08/2022",
    description: "TrackIt é um aplicativo que auxilia os usuários no desenvolvimento e manutenção de hábitos.",
  },
  {
    name: "Cineflex",
    data: "24/07/2022",
    description:
      "O Cineflex é um aplicativo que simula uma bilheteria de cinema, auxiliando na compra de ingressos online.",
  },
  {
    name: "ZapRecall",
    data: "24/06/2022",
    description:
      "ZapRecall é um app flashcards que pode ajudá-lo a estudar usando as abordagens Active Recall e Spaced Repetition.",
  },
];

function Timeline({ theme }) {
  const [repos, setRepos] = useState(undefined);
  const filter = repos?.filter((r) => r.name !== "guilhiz");
  console.log(filter);


  useEffect(() => {
    api
      .get("/guilhiz/repos")
      .then((res) => setRepos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Container>
      <S.Content switch={theme}>
        <VerticalTimeline lineColor="#000">
          {filter?.map((r) => (
            <VerticalTimelineElement
              key={r.name}
              className="vertical-timeline-element--project"
              iconStyle={{ background: "#1D2C49", width: "5%" }}
              icon={<GithubLogo size={32} color="#fff" weight="fill" />}
              date={r.created_at}
              dateClassName="date-timeline"
            >
              <h3>{r.name}</h3>
              <p>{r.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </S.Content>
    </S.Container>
  );
}

export default Timeline;
