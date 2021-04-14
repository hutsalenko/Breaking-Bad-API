import React from 'react';
import { useSelector } from 'react-redux';

import { Search } from '../SearchInput';
import { ItemList } from '../ItemList';

export const Characters = () => {
  const state = useSelector((state) => state);
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
