import { put, takeEvery, call } from 'redux-saga/effects';
import { spinner, setPerson } from '../redux/actions';
import axios from 'axios';

const random = () => axios.get('https://www.breakingbadapi.com/api/character/random').then((res) => res.data);

function* showRandomPersonWorker() {
  const data = yield call(random);
  yield put(setPerson(data));
  yield put(spinner(false));
}

export function* showRandomPerson() {
  yield takeEvery('GET_PERSON', showRandomPersonWorker);
}
