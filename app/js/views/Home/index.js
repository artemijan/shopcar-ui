/**
 * Created by arrtem on 2/10/17.
 */
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        Home

        { children }
      </div>
    );
  }
}
