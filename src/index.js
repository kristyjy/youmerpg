import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import AuthWall from './containers/authWall/authWall';
import App from './components/app';
import reducers from './reducers';
import thunk from 'redux-thunk';

import vars from './css/variables.css';
import normalize from './css/normalize.css';
import base from './css/base.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#app'));
/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <AuthWall path="/login" />
        <AuthWall path="/" />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));*/
