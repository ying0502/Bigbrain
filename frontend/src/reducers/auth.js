import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/actionTypes';

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
      return { ...state, ...payload, isLoggedIn: true };

    case LOGOUT:
      return {
        ...state, token: null, isLoggedIn: false,
      };

    default:
      return state;
  }
}
