/**
 * Created by admin on 3/16/2017.
 */
import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import * as AuthActions from '../actions/AuthActions';
import { bindActionCreators } from 'redux';
import store from '../store';

@connect(state => ({
  SecurityContext: state.auth.SecurityContext,
  SecurityPrincipal: state.auth.SecurityPrincipal
}))

class AuthControl extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(AuthActions, props.dispatch);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  static propTypes = {
    SecurityContext: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleLoginClick() {
    store.dispatch(this.actions.signIn({ username: "artem", password: "pwd" }));
  }

  handleLogoutClick() {
    store.dispatch(this.actions.signOut());
  }

  handleSignUp() {
    store.dispatch(this.actions.signUp({
      username: "artem",
      password: "pwd",
      firstName: "Singletone",
      lastName: "Property"
    }))
  }

  isLoggedIn() {
    return this.props.SecurityContext.isLoggedIn;
  }

  render() {
    let button = null, button2 = null;
    if (this.isLoggedIn()) {
      button = <span>
        <span>Hello, {this.props.SecurityPrincipal.firstName} {this.props.SecurityPrincipal.lastName}</span>
        <FlatButton onClick={this.handleLogoutClick} label="Sign out" />
      </span>;
    } else {
      button = <FlatButton onClick={this.handleLoginClick} label="Sign in" />;
      button2 = <FlatButton onClick={this.handleSignUp} label="Sign up" />;
    }

    return (
      <span>
        {button} {button2}
      </span>
    );
  }
}
export default AuthControl;
