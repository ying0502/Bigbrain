import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './actionTypes';

const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

const targetUrl = 'http://localhost:5005/';

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
  console.log(body);

  try {
    const res = await axios.post(`${targetUrl}admin/auth/register`, body, config);
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
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
  console.log(body);

  try {
    const res = await axios.post(`${targetUrl}admin/auth/login`, body, config);
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
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

export { register, login, logOut };
