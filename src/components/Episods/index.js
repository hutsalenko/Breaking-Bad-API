import React from 'react';
import { EpisodCard } from '../EpisodCard';
import { useSelector } from 'react-redux';
import './index.scss';

export const Episods = () => {
  const state = useSelector((state) => state.episods.episods);
  return (
    <div className="episod-list">
      {state.map((user) => {
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
