import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';

import './index.scss';

export const Search = ({ search, length }) => {
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <input
      ref={textInput}
      type="search"
      placeholder="search people"
      onChange={search}
      className={classNames('search-input', { inactive: !length })}
    />
  );
};
