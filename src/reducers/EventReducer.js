import {
  SAVE_EVENT
} from '../actions/types';
const INITAL_STATE = {
  event: {},
  loading: false,
  error: {},
}

export default (state = INITAL_STATE, action) => {

  switch (action.type) {
    case SAVE_EVENT:
      return { ...state, event: action.payload }
    default:
      return state;
  }
};