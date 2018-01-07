import React, { Component } from 'react';
import * as actions from '../../actions/firebase';
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount() {
    this.props.watchAuthStatus();
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {

    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <input type="email"
            value={this.state.email}
            onChange={(e) => this.onEmailChange(e)}
            placeholder="Email" />
          <input type="password"
            value={this.state.password}
            onChange={(e) => this.onPasswordChange(e)}
            placeholder="Password" />
          <button onClick={(e) => {this.onFormSubmit(e)}}>Login</button>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { firebase: state.firebase };
}

function mapDispatchToProps(dispatch) {
  return({
    watchAuthStatus: () => {dispatch(actions.watchAuthStatus())},
    login: (email, password) => {dispatch(actions.login(email, password))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
