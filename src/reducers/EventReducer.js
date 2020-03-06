import {
  LOGIN_USER
} from '../actions/types';
const INITAL_STATE = {}

export default (state = INITAL_STATE, action) => {

  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    default:
      return state;
  }
};