import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './actionTypes';

import { targetUrl, config } from '../utils/utils';
// REGISTER USER
const register = ({
  name,
  email,
  password,
}) => async (dispatch) => {
  const body = JSON.stringify({
    name,
    email,
    password,
  });
  try {
    const res = await axios.post(`${targetUrl}admin/auth/register`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data,
    });
  }
};

// LOGIN USER
const login = ({
  email,
  password,
}) => async (dispatch) => {
  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(`${targetUrl}admin/auth/login`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

// LOGOUT
const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export {
  register, login, logOut,
};
