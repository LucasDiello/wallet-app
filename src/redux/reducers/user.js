import { PASSWORD, VALID_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_EMAIL:
    return { ...state, email: action.payload };
  case PASSWORD:
    return { ...state, password: action.payload };
  default:
    return state;
  }
};

export default user;
