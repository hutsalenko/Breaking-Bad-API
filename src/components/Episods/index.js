import React from "react";
import { EpisodCard } from "../EpisodCard";

import "./index.scss";

export const Episods = ({ episodInfo }) => {
  return (
    <div className="episod-list">
      {episodInfo.map((user) => {
        return (
          <EpisodCard
            key={user.episode_id}
            air_date={user.air_date}
            episode={user.episode}
            season={user.season}
            series={user.series}
            title={user.title}
            characters={user.characters}
          />
        );
      })}
    </div>
  );
};
