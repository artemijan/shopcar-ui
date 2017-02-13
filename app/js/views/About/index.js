/**
 * Created by arrtem on 2/10/17.
 */
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        About
        { children }
      </div>
    );
  }
}
