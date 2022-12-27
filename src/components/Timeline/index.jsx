import React from "react";
import dayjs from "dayjs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { GithubLogo } from "phosphor-react";
import * as S from "./styles";

function Timeline({ theme, repos, username }) {
  const filterRepos = repos?.filter((r) => r.name !== `${username}`);

  const formatDate = (date) => {
    const splitDate = date.split("T")[0];
    const formattedDate = dayjs(splitDate).locale("pt-br").format("DD/MM/YYYY");
    return formattedDate;
  };

  return (
    <S.Container>
      <S.Content switch={theme}>
        <VerticalTimeline lineColor="#000">
          {filterRepos?.map((r) => (
            <VerticalTimelineElement
              key={r.name}
              className="vertical-timeline-element--project"
              iconStyle={{ background: "#1D2C49", width: "5%" }}
              icon={<GithubLogo size={32} color="#fff" weight="fill" />}
              date={formatDate(r.created_at)}
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
