import React, { useState } from 'react';
import { EpisodCard } from '../EpisodCard';
import { useSelector } from 'react-redux';
import './index.scss';

export const Episods = () => {
  const state = useSelector((state) => state.episods.episods);
  const [episodsQuantity, setEpisodsQuantity] = useState(10);
  const totalEpisods = state.slice(0, episodsQuantity);

  const increaseQuantity = () => setEpisodsQuantity((prev) => prev + 5);

  return (
    <>
      <div className="episod-list">
        {totalEpisods.map((user) => {
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
      <button className="episod-btn" onClick={() => increaseQuantity()}>
        Read More
      </button>
    </>
  );
};
