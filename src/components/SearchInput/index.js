import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';

// import { useDispatch, useSelector } from 'react-redux';
// import { filterUsers } from '../../redux/actions';

import './index.scss';

export const Search = ({ length, search }) => {
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <input
      ref={textInput}
      type="text"
      placeholder="search people"
      onChange={search}
      className={classNames('search-input', { inactive: !length })}
    />
  );
};
