/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import M from 'materialize-css';
// import { Route } from 'react-router-dom';
// import Modal from 'react-modal';
// import React from 'react';
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

// get EachQuiZ
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

// start new session
function StartNewSession(quizId) {
  fetch(`${targetUrl}admin/quiz/${quizId}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((data) => {
    console.log(data);
    if (data.status === 200) {
      M.toast({
        html: 'create session success',
        classes: 'rounded',
      });
      fetch(`${targetUrl}admin/quiz/${quizId}`, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json())
        .then((res) => {
          console.log(res);
          M.toast({
            html: `your current session ID is ${res.active}`,
            classes: 'rounded',
          });
        }).catch((err) => {
          console.log(err);
        });
    } else {
      M.toast({
        html: 'create session fail',
        classes: 'rounded',
      });
    }
  }).catch((err) => {
    console.log(err);
    M.toast({
      html: 'fetch fail',
      classes: 'rounded',
    });
  });
}

// end a session
function endSession(quizId) {
  fetch(`${targetUrl}admin/quiz/${quizId}/end`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((data) => {
    console.log(data);
    if (data.status === 200) {
      M.toast({
        html: 'End session Success',
        classes: 'rounded',
      });
    } else {
      M.toast({
        html: 'End session fail',
        classes: 'rounded',
      });
    }
  }).catch((err) => {
    console.log(err);
    M.toast({
      html: 'Fetch fail',
      classes: 'rounded',
    });
  });
}

// create new question
function createNewQuestion(quizId, updatedQuestion) {
  fetch(`${targetUrl}admin/quiz/${quizId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      questions: [updatedQuestion],
    }),
  }).then((result) => {
    console.log(result);
    if (result.status === 200) {
      M.toast({
        html: 'Create question Success',
        classes: 'rounded',
      });
    } else {
      M.toast({
        html: 'Create question fail',
        classes: 'rounded',
      });
    }
  }).catch((err) => {
    console.log(err);
    M.toast({ html: 'Fetch fail', classes: 'rounded' });
  });
}

// get session results
function GetSessionResult(sessionId) {
  fetch(`${targetUrl}admin/session/${sessionId}/results`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((result) => result.json())
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
      M.toast({ html: 'Fetch fail', classes: 'rounded' });
    });
}

export {
  createGame,
  getQuiz,
  DeleteGame,
  getEachQuiz,
  StartNewSession,
  endSession,
  createNewQuestion,
  GetSessionResult,
};
