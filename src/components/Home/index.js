import React from 'react';

import { personToState } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

export const Home = () => {
  const state = useSelector((state) => state.getPerson.person);
  const dispatch = useDispatch();

  return (
    <div className="random-container">
      <button onClick={() => dispatch(personToState())}>Random Person</button>
      <div className="random-block">
        <img src={state.img} alt="users" />
        <div className="random-block-desc">
          <span className="block-name">Name: {state.name}</span>
          <span className="block-nickname">Nickname: {state.nickname}</span>
          <span className="block-occupation">
            Opuccation:
            <ul>
              {state.occupation.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </span>
          <span className="block-portrayed">Portrayed: {state.portrayed}</span>
          <span className="block-status">Status: {state.status}</span>
        </div>
      </div>
    </div>
  );
};
