export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

import * as SessionAPIUtil from '../util/session_api_util';

// regular action creators

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER
});

export const receiveSessionsErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

// thunk action creators

export const login = (user) => (
  SessionAPIUtil.login(user)
    .then( (user) => receiveCurrentUser(user),
           (errors) => receiveSessionsErrors(errors) )
);

export const signup = (user) => (
  SessionAPIUtil.signup(user)
    .then( (user) => receiveCurrentUser(user),
           (errors) => receiveSessionsErrors(errors) )
);

export const logout = () => (
  SessionAPIUtil.logout()
    .then( () => logoutCurrentUser(),
           (errors) => receiveSessionsErrors(errors) )
);
