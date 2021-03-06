/**
 * Created by arrtem on 2/10/17.
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import  AuthControl from './AuthControl';
import { connect } from 'react-redux';

@connect(state => ({
  SecurityContext: state.auth.SecurityContext,
  SecurityPrincipal: state.auth.SecurityPrincipal
}))

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  isLoggedIn() {
    return this.props.SecurityContext.isLoggedIn;
  }

  render() {
    let authContent = <span>
      <FlatButton containerElement={<Link to='/' />} label="Home" />
        <FlatButton containerElement={<Link to='/about' />} label="About" />
        <FlatButton containerElement={<Link to='/contacts' />} label="Contacts" />
    </span>;
    return (
      <div className="menu-items-container">
        <AuthControl />
        {this.isLoggedIn() ? authContent : ""}
      </div>
    );
  }
}
const MenuBar = () => (
  <AppBar className="app-menu-bar" title="My app" iconElementRight={<MenuItems />}>
  </AppBar>
);
export default MenuBar;
