import { combineReducers } from 'redux';
// import alert from "./alert";
import auth from './auth';
import admin from './admin';

const rootReducer = combineReducers({
  // alert,
  auth,
  admin,
});

export default rootReducer;
