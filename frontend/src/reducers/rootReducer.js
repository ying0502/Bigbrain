import { combineReducers } from 'redux';
import auth from './auth';
import admin from './admin';
import quiz from './quiz';

const rootReducer = combineReducers({
  auth,
  admin,
  quiz,
});

export default rootReducer;
