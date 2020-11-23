import React from "react";

import "./index.scss";

const Search = ({ search, length }) => {
  let notActiveInput = "search-input";

  if (!length) {
    notActiveInput += " inactive";
  }
  return <input type="search" placeholder="search people" onChange={search} className={notActiveInput} />;
};

export default Search;
