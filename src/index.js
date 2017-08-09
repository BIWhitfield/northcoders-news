import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import App from './components/App';

import './css/bulma.css';
import './css/font-awesome.css';

const logger = createLogger();

const middlewares = [
  thunk,
  logger,
];

const store = createStore(
  reducer,
  compose(applyMiddleware(...middlewares)));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
