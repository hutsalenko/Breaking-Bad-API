import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { form, getPerson, getEpisods, getCharacters } from './redux/actions';
import './App.scss';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Episods } from './components/Episods';
import { Error } from './components/Error';
import { Spinner } from './components/Spinner';
import { Subscribe } from './components/Subscribe';
import { Characters } from './components/Characters';
import { Modal } from './components/Modal';

export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPerson());
    dispatch(getCharacters());
    dispatch(getEpisods());
  }, [dispatch]);

  useEffect(() => {
    let timer = setTimeout(() => dispatch(form()), 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={state.person.user.length > 0 && Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/episods" component={state.episods.episods.length > 0 && Episods} />
          <Route component={Error} />
        </Switch>
        {state.modal.value && <Modal />}
        {state.spinner.value && <Spinner />}
        {/* {state.form.value && <Subscribe />} */}
      </div>
    </BrowserRouter>
  );
};
