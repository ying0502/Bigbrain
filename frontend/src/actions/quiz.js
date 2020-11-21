/* eslint-disable import/prefer-default-export */
import M from 'materialize-css';
// import axios from 'axios';
import {
  QUIZ_NUMBER,
} from './actionTypes';
import { targetUrl } from '../utils/utils';

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

// DeleteGame
// export const AdvanceGame = async (
//   ID,
// ) => {
//   try {
//     console.log(Config, ID);
//     await axios.post(`${targetUrl}admin/quiz/${ID}/advance`, Config);
//     M.toast({
//       html: 'Advance success',
//       classes: 'rounded',
//     });
//   } catch (err) {
//     M.toast({
//       html: err.response.data.error,
//       classes: 'rounded',
//     });
//   }
// };

export const AdvanceGame = (quizId) => {
  fetch(`${targetUrl}admin/quiz/${quizId}/advance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((result) => {
    console.log(result);
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
  }).catch((err) => {
    console.log(err);
    M.toast({ html: 'Fetch fail', classes: 'rounded' });
  });
};
