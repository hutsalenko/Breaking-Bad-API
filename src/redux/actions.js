export function form() {
  return {
    type: 'SHOW_FORM',
  };
}

export function setPerson(payload) {
  return {
    type: 'SET_PERSON',
    payload,
  };
}

export function getPerson() {
  return {
    type: 'GET_PERSON',
  };
}

//Example with redux-thunk.

// export function receivePerson() {
//   return (dispatch) => {
//     dispatch(spinner(true));
//     api.get('/api/character/random').then((res) => {
//       dispatch(person(res.data));
//       dispatch(spinner(false));
//     });
//   };
// }

export function setEpisods(payload) {
  return {
    type: 'SET_EPISODS',
    payload,
  };
}

export function getEpisods() {
  return {
    type: 'GET_EPISODS',
  };
}

//Example with redux-thunk.

// export function receiveEpisods() {
//   return (dispatch) => {
//     dispatch(spinner(true));
//     api.get('/api/episodes').then((res) => {
//       dispatch(episods(res.data));
//       dispatch(spinner(false));
//     });
//   };
// }

export function setCharacters(payload) {
  return {
    type: 'SET_CHARACTERS',
    payload,
  };
}

export function getCharacters() {
  return {
    type: 'GET_CHARACTERS',
  };
}

//Example with redux-thunk.

// export function receiveCharacters() {
//   return (dispatch) => {
//     dispatch(spinner(true));
//     api.get('/api/characters').then((res) => {
//       dispatch(characters(res.data));
//       dispatch(spinner(false));
//     });
//   };
// }

export function spinner(payload) {
  return {
    type: 'CHECK_SPINNER',
    payload,
  };
}

export function modal(payload) {
  return {
    type: 'SHOW_PERSON',
    payload,
  };
}

export function checkModal(payload) {
  return {
    type: 'CHECK_MODAL',
    payload,
  };
}

export function input(payload) {
  return {
    type: 'VALUE_FROM_INPUT',
    payload,
  };
}
