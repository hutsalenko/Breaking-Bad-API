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
  apiKey: 'AIzaSyDOPfMedOONMQ-PbSiE_1fUvAhqrdqdRVM',
  authDomain: 'test-project-6080f.firebaseapp.com',
  projectId: 'test-project-6080f',
  storageBucket: 'test-project-6080f.appspot.com',
  messagingSenderId: '593571234663',
  appId: '1:593571234663:web:7ea532b62327742264a5c2',
  measurementId: 'G-262Z26NE0X',
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
