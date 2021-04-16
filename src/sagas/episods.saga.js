import { put, takeEvery, call } from 'redux-saga/effects';
import { spinner, setEpisods } from '../redux/actions';
import axios from 'axios';

const episodes = () => axios.get('https://www.breakingbadapi.com/api/episodes').then((res) => res.data);

function* showEpisodsWorker() {
  const data = yield call(episodes);
  yield put(setEpisods(data));
  yield put(spinner(false));
}

export function* showEpisods() {
  yield takeEvery('GET_EPISODS', showEpisodsWorker);
}
