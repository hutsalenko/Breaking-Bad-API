export function show() {
  return { type: 'SHOW' };
}

export function form(value) {
  return {
    type: 'SHOW_FORM',
    payload: value,
  };
}

export function modal() {
  return {
    type: 'SHOW_MODAL',
  };
}

export function firstShow() {
  return (dispatch) => {
    dispatch(show());
  };
}

export function filterUsers(name) {
  return {
    type: 'FILTER',
    payload: name,
  };
}

export function personToState(person) {
  return {
    type: 'GET_PERSON',
    payload: person,
  };
}
