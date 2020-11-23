import React from "react";
import Card from "../Card";

import "./index.scss";

const Item = ({ persons, click, choose }) => {
  return (
    <div className="card-list">
      {persons.map((user, i) => {
        return (
          <Card
            key={persons[i].char_id}
            name={persons[i].name}
            img={persons[i].img}
            check={click}
            all={persons[i]}
            choose={choose}
          />
        );
      })}
    </div>
  );
};

export default Item;
