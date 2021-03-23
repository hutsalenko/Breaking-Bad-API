import React from 'react';

import { useDispatch } from 'react-redux';
import { modal } from '../../redux/actions';

import './index.scss';

export const Card = ({ name, img, all, choose, check }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-item">
      <img alt="robots" src={img} />
      <h2>{name}</h2>
      <button type="button" onMouseUp={check} onMouseDown={() => choose(all)}>
        Watch All
      </button>
    </div>
  );
};
