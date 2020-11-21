import {
  CREATE_GAME, CREATE_GAME_FAIL, GET_QUIZ, DELETE_GAME, GET_EACH_QUIZ, GET_PLAYER_ID,
} from '../actions/actionTypes';

export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_GAME:
    case CREATE_GAME_FAIL:
    case GET_QUIZ:
    case DELETE_GAME:
    case GET_PLAYER_ID:
      return {
        ...state,
        ...payload,
      };

    case GET_EACH_QUIZ:
      return {
        ...state,
        allQuestions: payload,
      };

    default:
      return state;
  }
}
