/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// import { Route } from 'react-router-dom';
import {
  CREATE_GAME,
  CREATE_GAME_FAIL,
  GET_QUIZ,
  DELETE_GAME,
  GET_EACH_QUIZ,
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

// DeleteGame
const DeleteGame = ({
  ID,
}) => async (dispatch) => {
  console.log(ID);
  try {
    const res = await axios.delete(`${targetUrl}admin/quiz/${ID}`, Config);
    dispatch({
      type: DELETE_GAME,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

// get QUIZ
const getQuiz = () => async (dispatch) => {
  try {
    const res = await axios.get(`${targetUrl}admin/quiz/`, Config);
    console.log(res.data);
    dispatch({
      type: GET_QUIZ,
      payload: res.data,
    });
  } catch (err) {
    //
  }
};

// get QUIZ
const getEachQuiz = (quizId) => async (dispatch) => {
  try {
    console.log(quizId);
    const res = await axios.get(`${targetUrl}admin/quiz/${quizId}`, Config);
    console.log(res.data);
    dispatch({
      type: GET_EACH_QUIZ,
      payload: res.data,
    });
  } catch (err) {
    //
  }
};
export {
  createGame,
  getQuiz,
  DeleteGame,
  getEachQuiz,
};
