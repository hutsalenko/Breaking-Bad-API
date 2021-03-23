import React from 'react';

import { useDispatch } from 'react-redux';
import { modal } from '../../redux/actions';

import './index.scss';

export const Modal = ({ userInfo }) => {
  // console.log(userInfo);

  const dispatch = useDispatch();

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-block">
          <img src={userInfo.img} alt="users" />
          <div className="modal-block-desc">
            <span className="block-name">Name: {userInfo.name}</span>
            <span className="block-nickname">Nickname: {userInfo.nickname}</span>
            <span className="block-occupation">
              Opuccation:
              <ul>
                {userInfo.occupation.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </span>
            <span className="block-portrayed">Portrayed: {userInfo.portrayed}</span>
            <span className="block-status">Status: {userInfo.status}</span>
          </div>

          <button type="button" onClick={dispatch(modal())} className="exit-btn">
            X
          </button>
        </div>
      </div>
    </>
  );
};
