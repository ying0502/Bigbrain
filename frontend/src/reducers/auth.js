import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/actionTypes';

import { targetUrl, config } from '../utils/utils';

const initialState = {
  token: null,
  isAuthenticated: null,
  isLoggedIn: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state, payload, token: null, isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      console.log(payload);
      return { ...state, ...payload, isLoggedIn: true };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state, token: null, isLoggedIn: false,
      };

    default:
      return state;
  }
}
