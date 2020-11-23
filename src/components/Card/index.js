import React from "react";

import "./index.scss";

const Card = ({ name, img, check, all, choose }) => {
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
export default Card;
//
