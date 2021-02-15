import React from "react";
import { Card } from "../Card";

import "./index.scss";

export const ItemList = ({ persons, click, choose }) => {
  return (
    <div className="card-list">
      {persons.map((user) => {
        return (
          <Card key={user.char_id} name={user.name} img={user.img} check={click} all={user} choose={choose} />
        );
      })}
    </div>
  );
};
