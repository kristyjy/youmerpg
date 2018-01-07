import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../containers/header/header';
//import Nav from './nav/nav';
import Home from '../components/home/home';
import User from '../containers/user/user';

export default class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/user" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
