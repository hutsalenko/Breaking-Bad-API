import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../redux/actions';

import { Search } from '../SearchInput';
import { ItemList } from '../ItemList';

const Characters = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, []);

    const filterPerson = state.characters.characters.filter((persons) => {
        return persons.name.toLowerCase().includes(state.input.value.toLowerCase());
    });

    return (
        <>
            <Search length={filterPerson.length} />
            <ItemList persons={filterPerson} />
        </>
    );
};

export default Characters;
