export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as SessionAPIUtil from '../../util/session_api_util';

// regular action creators

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: { errors }
});

// thunk action creators

export const login = (user) => (
  SessionAPIUtil.login(user)
    .then( (user) => receiveCurrentUser(user) )
);

export const signup = (user) => (
  SessionAPIUtil.signup(user)
    .then( (user) => receiveCurrentUser(user) )
);

export const logout = () => (
  SessionAPIUtil.logout()
    .then( () => logoutCurrentUser() )
);
