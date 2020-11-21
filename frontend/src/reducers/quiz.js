import {
  QUIZ_NUMBER,
  ADVANCE,
} from '../actions/actionTypes';

export default function (state = {}, action) {
  const { type, number, payload } = action;
  switch (type) {
    case QUIZ_NUMBER:
      return {
        ...state,
        number,
      };

    case ADVANCE:
      console.log(payload);
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
}
