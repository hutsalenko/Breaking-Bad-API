import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Search } from './components/SearchInput';
import { ItemList } from './components/ItemList';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Episods } from './components/Episods';
import { Error } from './components/Error';
import { Spinner } from './components/Spinner';
import { Subscribe } from './components/Subscribe';

import './App.scss';
import { Modal } from './components/Modal';

const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com',
});

export const App = () => {
  const [person, setPerson] = useState([]);
  const [episods, setEpisods] = useState([]);
  const [randomPerson, setRandomPerson] = useState({});
  const [onePerson, setOnePerson] = useState({});
  const [searchFiled, setSearchFiled] = useState('');
  const [isActive, setIsActive] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getPerson();
    getEpisods();
    getRandomPerson();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => setShowForm(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getPerson = () => {
    setIsShow(true);
    api.get(`/api/characters`).then((res) => {
      setPerson(res.data);
      setIsShow(false);
    });
  };

  const getEpisods = () => {
    setIsShow(true);
    api.get(`/api/episodes`).then((res) => {
      setEpisods(res.data);
      setIsShow(false);
    });
  };

  const getRandomPerson = () => {
    setIsShow(true);
    api.get(`/api/character/random`).then((res) => {
      setRandomPerson(res.data);
      setIsShow(false);
    });
  };

  const onChangeInput = (e) => setSearchFiled(e.target.value);

  const onHandleCheck = () => setIsActive(!isActive);

  const addPersonToModal = (user) => setOnePerson(user);

  const closeSubscribeWindow = () => {
    setShowForm(!showForm);
  };

  const filterPerson = person.filter((persons) => {
    return persons.name.toLowerCase().includes(searchFiled.toLowerCase());
  });

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() =>
              randomPerson.length && <Home person={randomPerson} changePerson={getRandomPerson} />
            }
          />
          <Route
            path="/characters"
            render={() => (
              <>
                <Search search={onChangeInput} length={filterPerson.length} />
                <ItemList persons={filterPerson} click={onHandleCheck} choose={addPersonToModal} />
              </>
            )}
          />
          <Route path="/episods" render={() => episods.length > 0 && <Episods episodInfo={episods} />} />
          <Route component={Error} />
        </Switch>
        {isActive && <Modal check={onHandleCheck} userInfo={onePerson} />}
        {isShow && <Spinner />}
        {showForm && <Subscribe closeForm={closeSubscribeWindow} />}
      </div>
    </BrowserRouter>
  );
};
