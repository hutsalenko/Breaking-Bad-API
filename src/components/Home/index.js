import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receivePerson } from '../../redux/actions';
import './index.scss';

export const Home = () => {
  const state = useSelector((state) => state.person.user);
  const dispatch = useDispatch();
  const personObj = { ...state }[0];

  return (
    <div className="random-container">
      <button onClick={() => dispatch(receivePerson())}>Random Person</button>
      <div className="random-block">
        <img src={personObj.img} alt="users" />
        <div className="random-block-desc">
          <span className="block-name">Name: {personObj.name}</span>
          <span className="block-nickname">Nickname: {personObj.nickname}</span>
          <span className="block-occupation">
            Opuccation:
            <ul>
              {personObj.occupation.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </span>
          <span className="block-portrayed">Portrayed: {personObj.portrayed}</span>
          <span className="block-status">Status: {personObj.status}</span>
        </div>
      </div>
    </div>
  );
};
