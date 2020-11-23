import React from "react";

import "./index.scss";

const Card = ({ air_date, episode, season, series, title }) => {
  return (
    <div className="episod-item">
      <div className="episod-item-season">Season #{season}</div>
      <div className="episod-item-episod">Episode #{episode}</div>
      <h2 className="episod-item-title">Title: {title}</h2>
      <div className="episod-item-series">Series: {series}</div>
      <div className="episod-item-date">Date: {air_date.split("-")[2]}</div>
    </div>
  );
};
export default Card;
