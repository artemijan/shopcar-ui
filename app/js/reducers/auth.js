/**
 * Created by arrtem on 3/18/17.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
  SecurityContext: { isLoggedIn: false },
  SecurityPrincipal: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case types.SIGN_IN:
      return {
        ...state,
        SecurityContext: { isLoggedIn: true, id: 1, privileges: [], type: 'SU' },
        SecurityPrincipal: { credentials: action.credentials, firstName: 'Artem', lastName: 'FedoroFF' },
      };

    case types.SIGN_OUT:
      return {
        ...state,
        SecurityContext: { isLoggedIn: false },
        SecurityPrincipal: null
      };

    case types.SIGN_UP:
      return {
        ...state,
        SecurityContext: { isLoggedIn: true, id: 1, privileges: [], type: 'GUEST' },
        SecurityPrincipal: {
          credentials: { username: action.username, password: action.password },
          firstName: action.firstName,
          lastName: action.lastName
        },
      };
    default:
      return state;
  }
}
