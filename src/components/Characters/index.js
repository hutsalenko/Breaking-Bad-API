import React from 'react';

import { Search } from '../SearchInput';
import { ItemList } from '../ItemList';

export const Characters = ({ length, persons, choose, search, click }) => {
  return (
    <>
      <Search search={search} length={length} />
      <ItemList persons={persons} click={click} choose={choose} />
    </>
  );
};
