import {
  CREATE_GAME, CREATE_GAME_FAIL, GET_QUIZ,
} from '../actions/actionTypes';

export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_GAME:
    case CREATE_GAME_FAIL:
    case GET_QUIZ:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
