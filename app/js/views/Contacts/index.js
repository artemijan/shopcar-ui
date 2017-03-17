/**
 * Created by admin on 3/15/2017.
 */
import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        Contacts
        { children }
      </div>
    );
  }
}
