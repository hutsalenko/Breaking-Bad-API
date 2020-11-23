import React from "react";
import EpisodCard from "../EpisodCard";

import "./index.scss";

const Episods = ({ episodInfo, check, page }) => {
  return (
    <div className="episod-list">
      {episodInfo.map((user, i) => {
        return (
          <EpisodCard
            key={episodInfo[i].episode_id}
            air_date={episodInfo[i].air_date}
            episode={episodInfo[i].episode}
            season={episodInfo[i].season}
            series={episodInfo[i].series}
            title={episodInfo[i].title}
            characters={episodInfo[i].characters}
          />
        );
      })}
    </div>
  );
};
export default Episods;
