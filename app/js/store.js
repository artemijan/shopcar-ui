/**
 * Created by arrtem on 3/18/17.
 */
import * as reducers from './reducers';
import { combineReducers } from 'redux';
import { createStore } from './utils/devTools';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
export default store;
