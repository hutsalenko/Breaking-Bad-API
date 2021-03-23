import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Episods } from './components/Episods';
import { Error } from './components/Error';
import { Spinner } from './components/Spinner';
import { Subscribe } from './components/Subscribe';
import { Modal } from './components/Modal';

import { Characters } from './components/Characters';

import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { firstShow, form, personToState, modal } from './redux/actions';

const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com',
});

export const App = () => {
  const [person, setPerson] = useState([]);
  const [episods, setEpisods] = useState([]);
  const [onePerson, setOnePerson] = useState({});
  const [searchFiled, setSearchFiled] = useState('');
  const [isActive, setIsActive] = useState(null);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getPerson();
    getEpisods();

    dispatch(personToState());
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => dispatch(firstShow()), 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const getPerson = () => {
    dispatch(form(true));
    api.get(`/api/characters`).then((res) => {
      setPerson(res.data);
      dispatch(form(false));
    });
  };

  const getEpisods = () => {
    dispatch(form(true));
    api.get(`/api/episodes`).then((res) => {
      setEpisods(res.data);
      dispatch(form(false));
    });
  };

  const onChangeInput = (e) => setSearchFiled(e.target.value);
  const onHandleCheck = () => setIsActive(!isActive);
  const addPersonToModal = (user) => setOnePerson(user);

  const filterPerson = person.filter((persons) => {
    return persons.name.toLowerCase().includes(searchFiled.toLowerCase());
  });

  console.log(state.isModalHidden);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (Object.keys(state.getPerson.person).length ? <Home /> : <Spinner />)}
          />
          <Route
            path="/characters"
            render={() => (
              <Characters
                search={onChangeInput}
                length={filterPerson.length}
                persons={filterPerson}
                choose={addPersonToModal}
                click={onHandleCheck}
              />
            )}
          />
          <Route path="/episods" render={() => episods.length > 0 && <Episods episodInfo={episods} />} />
          <Route component={Error} />
        </Switch>
        {isActive && <Modal userInfo={onePerson} />}
        {state.isFormHidden.showModal && <Spinner />}
        {/* {state.getValue.showForm && <Subscribe />} */}
      </div>
    </BrowserRouter>
  );
};
