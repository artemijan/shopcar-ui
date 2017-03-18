/**
 * Created by arrtem on 3/18/17.
 */
import React, { Component } from 'react';
import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import Contacts from  './views/Contacts';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Home } />
          <Route path='about' component={ About } />
          <Route path='contacts' component={ Contacts } />
        </Route>
      </Router>
    );
  }
}
export default Routes;
