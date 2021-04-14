import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkModal } from '../../redux/actions';
import './index.scss';

export const Modal = () => {
  const state = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-block">
          <img src={state.img} alt="users" />
          <div className="modal-block-desc">
            <span className="block-name">Name: {state.name}</span>
            <span className="block-nickname">Nickname: {state.nickname}</span>
            <span className="block-occupation">
              Opuccation:
              <ul>{state.occupation && state.occupation.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </span>
            <span className="block-portrayed">Portrayed: {state.portrayed}</span>
            <span className="block-status">Status: {state.status}</span>
          </div>

          <button type="button" onClick={() => dispatch(checkModal())} className="exit-btn">
            X
          </button>
        </div>
      </div>
    </>
  );
};
