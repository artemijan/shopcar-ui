/**
 * Created by admin on 3/31/2017.
 */
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class LoginDialog extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpened: false, password: '', username: '' };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
  }

  onModelChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  onSubmit(event) {
    let credentials = {
      password: this.state.password,
      username: this.state.username
    };
    this._cb(credentials);
    this.handleClose();
  };

  handleOpen() {
    this.setState({ isOpened: true });
    return {
      then:(cb)=>{
        this._cb=cb;
      }
    };
  };

  handleClose() {
    this.setState({ isOpened: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onSubmit}
      />,
    ];

    return (
      <Dialog
        title="Sign in form"
        className="controlled-form"
        actions={actions}
        modal={false}
        open={this.state.isOpened}
        onRequestClose={this.handleClose}>
        <div>
          <TextField
            id="login-username"
            hintText=""
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onModelChange}
            fullWidth={true}
            floatingLabelText="Username or email"
          />
        </div>
        <div>
          <TextField
            id="login-password"
            hintText=""
            name="password"
            value={this.state.password}
            onChange={this.onModelChange}
            fullWidth={true}
            floatingLabelText="Password"
            type="password"
          />
        </div>
      </Dialog>
    );
  }
}
export default LoginDialog;
