import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {logout} from '../../actions/firebase';

import styles from './header.css';

class Header extends Component {

  onLogoutClick(e) {
    this.props.logout();
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/home">You Me RPG</NavLink>
        </div>
        <div>
          <NavLink to="/user">User</NavLink>
          <button onClick={(e) => this.onLogoutClick()}>Log Out</button>
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logout}, dispatch);
}

export default connect(null, mapDispatchToProps)(Header)
