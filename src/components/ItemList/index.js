import React from 'react';
import { Card } from '../Card';

import './index.scss';

export const ItemList = ({ persons }) => {
  return (
    <div className="card-list">
      {persons.map((user) => {
        return <Card key={user.char_id} name={user.name} img={user.img} all={user} />;
      })}
    </div>
  );
};
