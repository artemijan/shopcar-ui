/**
 * Created by arrtem on 2/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { grey900, blue50 } from 'material-ui/styles/colors';
import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import Contacts from  './views/Contacts';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const muiTheme = getMuiTheme(darkBaseTheme);
muiTheme.appBar.color = grey900;
muiTheme.appBar.textColor = blue50;
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <Route path='about' component={ About } />
        <Route path='contacts' component={ Contacts } />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
);
