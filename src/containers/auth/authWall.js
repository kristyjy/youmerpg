import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Login from './login';
import SignUp from './signup';
import App from '../../components/app';

const PRIVATE_ROOT = '/home';
const PUBLIC_ROOT = '/login';

export class AuthWall extends Component {
  render() {
    if (this.props.firebase.user && this.props.firebase.user.isAnonymous === false) {
      return this.props.location.pathname == PUBLIC_ROOT ?
        <Redirect to={ PRIVATE_ROOT } /> :
        <Route { ...this.props} component={App} />;
    }
    else {
      if (this.props.path == '/signup') {
        return <Route path='/signup' component={SignUp} />
      }
      return this.props.path == PUBLIC_ROOT ?
        <Route path={PUBLIC_ROOT} component={Login} /> :
        <Redirect to={ PUBLIC_ROOT } />;
    }
  }
}

function mapStateToProps(state) {
  return {
    firebase: state.firebase
  }
}

export default connect(mapStateToProps)(AuthWall)
