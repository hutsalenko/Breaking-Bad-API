import { combineReducers } from 'redux';

import getValue from './reducers/getValue';
import isFormHidden from './reducers/isFormHidden';
import isModalHidden from './reducers/isModalHidden';
import setSearchFiled from './reducers/setSearchFiled';
import getPerson from './reducers/getPerson';

export default combineReducers({
  getValue,
  isFormHidden,
  isModalHidden,
  setSearchFiled,
  getPerson,
});
