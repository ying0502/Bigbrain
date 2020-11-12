/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  CREATE_GAME,
  CREATE_GAME_FAIL,
} from './actionTypes';

import { targetUrl, Config } from '../utils/utils';

// createGame
const createGame = ({
  name,
}) => async (dispatch) => {
  const body = JSON.stringify({
    name,
  });
  console.log(name);
  try {
    const res = await axios.post(`${targetUrl}admin/quiz/new`, body, Config);
    dispatch({
      type: CREATE_GAME,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CREATE_GAME_FAIL,
      payload: err.response.data,
    });
  }
};

export {
  createGame,
};
