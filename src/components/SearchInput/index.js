import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { input } from '../../redux/actions';
import './index.scss';

export const Search = ({ length }) => {
    const dispatch = useDispatch();
    const textInput = useRef();

    useEffect(() => {
        textInput.current.focus();
    }, []);

    return (
        <input
            ref={textInput}
            type="search"
            placeholder="search people"
            onInput={(e) => dispatch(input(e.target.value))}
            className={classNames('search-input', { inactive: !length })}
        />
    );
};
