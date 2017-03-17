/**
 * Created by arrtem on 2/10/17.
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import  LoginControl from './LoginControl';
class MenuItems extends Component {

  render() {
    return (
      <div className="menu-items-container">
        <LoginControl />
        <FlatButton containerElement={<Link to='/' />} label="Home" />
        <FlatButton containerElement={<Link to='/about' />} label="About" />
        <FlatButton containerElement={<Link to='/contacts' />} label="Contacts" />
      </div>
    );
  }
}
const MenuBar = () => (
  <AppBar className="app-menu-bar" title="My app" iconElementRight={<MenuItems />}>
  </AppBar>
);
export default MenuBar;
