import { put, takeEvery, call } from 'redux-saga/effects';
import { spinner, setCharacters } from '../redux/actions';
import axios from 'axios';

const characters = () => axios.get('https://www.breakingbadapi.com/api/characters').then((res) => res.data);

function* showCharactersWorker() {
  const data = yield call(characters);
  yield put(setCharacters(data));
  yield put(spinner(false));
}

export function* showCharacters() {
  yield takeEvery('GET_CHARACTERS', showCharactersWorker);
}
