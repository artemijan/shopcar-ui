/**
 * Created by arrtem on 2/10/17.
 */
import React, { Component } from 'react';
import MenuBar from '../../components/MenuBar';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='app-container'>
        <MenuBar />
        <div className='app-views-container'>
          { children }
          </div>
      </div>
    );
  }
}
