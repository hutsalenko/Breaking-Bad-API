import React from 'react';

import { Search } from '../SearchInput';
import { ItemList } from '../ItemList';

export const Characters = ({ length, persons, choose, search, click }) => {
  return (
    <>
      <Search length={length} search={search} />
      <ItemList persons={persons} choose={choose} click={click} />
    </>
  );
};
