import React from 'react';
import { Card } from '../Card';

import { useSelector } from 'react-redux';

import './index.scss';

// const filterPerson = person.filter((persons) => {
//     return persons.name.toLowerCase().includes(searchFiled.toLowerCase());
//   });

export const ItemList = ({ persons, choose }) => {
  return (
    <div className="card-list">
      {persons.map((user) => {
        return <Card key={user.char_id} name={user.name} img={user.img} all={user} choose={choose} />;
      })}
    </div>
  );
};
