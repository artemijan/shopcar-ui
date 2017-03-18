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
import Routes from './routes';
import { renderDevTools } from './utils/devTools';
import { Provider } from 'react-redux';
import store from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme(darkBaseTheme);
muiTheme.appBar.color = grey900;
muiTheme.appBar.textColor = blue50;
ReactDOM.render(
  <div>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
    {renderDevTools(store)}
  </div>,
  document.getElementById('app')
);
