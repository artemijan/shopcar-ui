/**
 * Created by arrtem on 3/18/17.
 */
import * as types from '../constants/ActionTypes';

export function signIn(credentials) {
  return {
    type: types.SIGN_IN,
    credentials: {
      ...credentials
    }
  };
}

export function signOut() {
  return {
    type: types.SIGN_OUT
  };
}

export function signUp(signUpInfo){
  return {
    type:types.SIGN_UP,
    ...signUpInfo
  }
}
