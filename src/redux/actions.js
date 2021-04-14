import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com',
});

export function form() {
  return {
    type: 'SHOW_FORM',
  };
}

export function person(value) {
  return {
    type: 'GET_PERSON',
    payload: value,
  };
}

export function receivePerson() {
  return (dispatch) => {
    dispatch(spinner(true));
    api.get('/api/character/random').then((res) => {
      dispatch(person(res.data));
      dispatch(spinner(false));
    });
  };
}

export function episods(value) {
  return {
    type: 'GET_EPISODS',
    payload: value,
  };
}

export function receiveEpisods() {
  return (dispatch) => {
    dispatch(spinner(true));
    api.get('/api/episodes').then((res) => {
      dispatch(episods(res.data));
      dispatch(spinner(false));
    });
  };
}

export function characters(value) {
  return {
    type: 'GET_CHARACTERS',
    payload: value,
  };
}

export function receiveCharacters() {
  return (dispatch) => {
    dispatch(spinner(true));
    api.get('/api/characters').then((res) => {
      dispatch(characters(res.data));
      dispatch(spinner(false));
    });
  };
}

export function spinner(value) {
  return {
    type: 'CHECK_SPINNER',
    payload: value,
  };
}

export function modal(user) {
  return {
    type: 'SET_PERSON',
    payload: user,
  };
}

export function checkModal(value) {
  return {
    type: 'CHECK_MODAL',
    payload: value,
  };
}

export function input(value) {
  return {
    type: 'VALUE_FROM_INPUT',
    payload: value,
  };
}
