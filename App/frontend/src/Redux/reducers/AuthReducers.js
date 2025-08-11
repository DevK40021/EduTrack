import {
  LOGIN_USER,
  LOGIN_FAILURE,
  SIGNUP_USER,
  SIGNUP_FAILURE,
  SIGNOUT_USER,
} from "../actions/type.js";

const initialState = {
  token: null,
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.userToken,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case SIGNUP_USER:
      return { ...state, token: action.payload.userToken, error: null };
    case SIGNUP_FAILURE:
      return { ...state, error: action.payload };
    case SIGNOUT_USER:
      return { initialState }; // Reset state to initial state
    default:
      return state;
  }
};

export default authReducer;
