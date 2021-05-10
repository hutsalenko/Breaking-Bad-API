import React, { useState } from 'react';
import { Card } from '../Card';

import classNames from 'classnames';

import './index.scss';

export const ItemList = ({ persons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [activePage, setActivePage] = useState(0);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = persons.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(persons.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="card-wrapper">
      <div className="card-list">
        {currentPosts.map((user) => {
          return <Card key={user.char_id} name={user.name} img={user.img} all={user} />;
        })}
      </div>

      <ul className="card-page">
        {pageNumbers.map((number, i) => (
          <li
            key={number}
            onClick={() => {
              paginate(number);
              setActivePage(i);
            }}
            className={classNames({ 'active-page': activePage == i })}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
