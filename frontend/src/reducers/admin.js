import {
  CREATE_GAME, CREATE_GAME_FAIL,
} from '../actions/actionTypes';

export default function (state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_GAME:
      return {
        ...state,
        ...payload,
      };

    case CREATE_GAME_FAIL:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
