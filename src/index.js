import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

import fetchMiddleware from './redux/fetchMiddleware';

const store = createStore(rootReducer, applyMiddleware(fetchMiddleware, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
