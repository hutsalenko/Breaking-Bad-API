import { personToState } from './actions';

const fetchMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'GET_PERSON') {
    fetch('https://www.breakingbadapi.com/api/character/random')
      .then((res) => res.json())
      .then((data) => {
        next(personToState(data[0]));
      });
  }
};

export default fetchMiddleware;
