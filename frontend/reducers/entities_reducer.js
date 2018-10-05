import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;
