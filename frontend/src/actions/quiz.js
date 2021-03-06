/* eslint-disable import/prefer-default-export */
import M from 'materialize-css';
import axios from 'axios';
import {
  QUIZ_NUMBER,
} from './actionTypes';
import { targetUrl, Config } from '../utils/utils';

// Update information of fame
export const UpdateGame = (quizId, payload) => (dispatch) => {
  fetch(`${targetUrl}admin/quiz/${quizId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(
      payload,
    ),
  }).then((result) => {
    console.log(result);
    if (result.status === 200) {
      M.toast({
        html: 'Update game Success',
        classes: 'rounded',
      });
      console.log(payload);
      dispatch({
        type: QUIZ_NUMBER,
        number: payload.questions.length,
      });
    } else {
      M.toast({
        html: 'Update game fail',
        classes: 'rounded',
      });
    }
  }).catch((err) => {
    console.log(err);
    M.toast({ html: 'Fetch fail', classes: 'rounded' });
  });
};

export const AdvanceGame = (quizId) => {
  fetch(`${targetUrl}admin/quiz/${quizId}/advance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((result) => {
    if (result.status === 200) {
      M.toast({
        html: 'Advance game Success',
        classes: 'rounded',
      });
    } else {
      M.toast({
        html: 'Advance game fail',
        classes: 'rounded',
      });
    }
    return result.json();
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
    M.toast({ html: 'Fetch fail', classes: 'rounded' });
  });
};

// player start Game
export const startGame = async (
  ID,
) => {
  try {
    const resStatus = await axios.get(`${targetUrl}play/${Number(ID)}/status`, Config);
    if (resStatus.data) {
      M.toast({
        html: 'start success',
        classes: 'rounded',
      });
    }
    const res = await axios.get(`${targetUrl}play/${Number(ID)}/question`, Config);
    M.toast({
      html: 'get question success',
      classes: 'rounded',
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    M.toast({
      html: err.response.data.error,
      classes: 'rounded',
    });
  }
  return '';
};

export const startGameRefresh = async (
  ID,
) => {
  try {
    const res = await axios.get(`${targetUrl}play/${Number(ID)}/question`, Config);
    return res.data;
  } catch (err) {
    return err.response.data.err;
  }
};

export const getAnsw = async (ID) => {
  try {
    const res = await axios.get(`${targetUrl}play/${Number(ID)}/answer`, Config);
    return res.data;
  } catch (err) {
    return err.response.data.err;
  }
};
// Update information of fame
export const putAnsw = (ID, payload) => {
  const answers = { answerIds: payload };
  fetch(`${targetUrl}play/${ID}/answer`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(
      answers,
    ),
  }).then(() => {
    // console.log(result);
  }).catch(() => {
    // console.log(err);
    // M.toast({ html: 'Fetch fail', classes: 'rounded' });
  });
};

export const getResult = async (ID) => {
  try {
    const res = await axios.get(`${targetUrl}play/${Number(ID)}/results`, Config);
    return res.data;
  } catch (err) {
    return err.response.data.err;
  }
};

export const Result = async (ID) => {
  try {
    const res = await axios.get(`${targetUrl}admin/session/${Number(ID)}/results`, Config);
    return res.data;
  } catch (err) {
    return err.response.data.err;
  }
};
