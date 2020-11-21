import {
  QUIZ_NUMBER,
} from '../actions/actionTypes';

export default function (state = {}, action) {
  const { type, number } = action;
  switch (type) {
    case QUIZ_NUMBER:
      console.log('questions amount', number);
      return {
        ...state,
        number,
      };

    default:
      return state;
  }
}
