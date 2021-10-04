import React, { useState, useEffect } from 'react';
import { EpisodCard } from '../EpisodCard';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisods } from '../../redux/actions';
import './index.scss';

const Episods = () => {
    const state = useSelector((state) => state.episods.episods);
    const dispatch = useDispatch();
    const [episodsQuantity, setEpisodsQuantity] = useState(10);

    useEffect(() => {
        dispatch(getEpisods());
    }, []);

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

export default Episods;
