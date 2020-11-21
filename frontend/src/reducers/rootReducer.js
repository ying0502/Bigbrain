import { combineReducers } from 'redux';
// import alert from "./alert";
import auth from './auth';
import admin from './admin';
import quiz from './quiz';

const rootReducer = combineReducers({
  // alert,
  auth,
  admin,
  quiz,
});

export default rootReducer;
