import { combineReducers } from 'redux';

import setShowForm from './reducers/setShowForm';
import showRandomPerson from './reducers/showRandomPerson';
import showEpisods from './reducers/showEpisods';
import showCharacters from './reducers/showCharacters';
import showSpinner from './reducers/showSpinner';
import userModal from './reducers/userModal';
import checkModal from './reducers/checkModal';
import searchUser from './reducers/searchUser';

export default combineReducers({
  form: setShowForm,
  person: showRandomPerson,
  episods: showEpisods,
  characters: showCharacters,
  spinner: showSpinner,
  user: userModal,
  modal: checkModal,
  input: searchUser,
});
