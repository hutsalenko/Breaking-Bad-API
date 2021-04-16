import { all } from 'redux-saga/effects';
import { showRandomPerson } from '../sagas/person.sagas';
import { showEpisods } from '../sagas/episods.saga';
import { showCharacters } from '../sagas/characters.saga';

export function* rootSaga() {
  yield all([showRandomPerson(), showEpisods(), showCharacters()]);
}
