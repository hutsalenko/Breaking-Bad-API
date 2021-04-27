import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/root.saga';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBhN-FZvdzyYyCkru0cKQQImX-2Kh4oNXw',
  authDomain: 'example-project-40a8e.firebaseapp.com',
  databaseURL: 'https://example-project-40a8e-default-rtdb.firebaseio.com',
  projectId: 'example-project-40a8e',
  storageBucket: 'example-project-40a8e.appspot.com',
  messagingSenderId: '680812479473',
  appId: '1:680812479473:web:2cfac1bdfd441af723fa50',
};

firebase.initializeApp(firebaseConfig);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
