import React from "react";

import "./index.scss";

export const Home = ({ person, changePerson }) => {
  const personObj = { ...person }[0];

  return (
    <div className="random-container">
      <button onClick={changePerson}>Random Person</button>
      <div className="random-block">
        <img src={personObj.img} alt="users" />
        <div className="random-block-desc">
          <span className="block-name">Name: {personObj.name}</span>
          <span className="block-nickname">Nickname: {personObj.nickname}</span>
          <span className="block-occupation">
            Opuccation:
            <ul>
              {personObj.occupation.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </span>
          <span className="block-portrayed">Portrayed: {personObj.portrayed}</span>
          <span className="block-status">Status: {personObj.status}</span>
        </div>
      </div>
    </div>
  );
};
