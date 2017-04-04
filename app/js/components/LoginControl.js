/**
 * Created by admin on 3/16/2017.
 */
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import LoginDialog from './LoginDialog';
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.openLoginForm = this.openLoginForm.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  openLoginForm() {
    this.loginForm.handleOpen()
      .then((data)=>{
        this.setState({isLoggedIn:true})
      });
  };

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <span>
        <span>Hello, User</span>
        <FlatButton onClick={this.handleLogoutClick} label="Logout" />
      </span>;
    } else {
      button = <FlatButton onClick={this.openLoginForm} label="Login" />;
    }

    return (
      <span>
        {button}
        <LoginDialog ref={(child) => {
          this.loginForm = child;
        }} />
      </span>
    );
  }
}
export default LoginControl;
