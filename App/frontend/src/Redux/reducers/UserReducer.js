import { GETALL_USERS, SIGNOUT_USER } from "../actions/type.js";

const initialState = [];

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_USERS:
      return action.payload;
    case SIGNOUT_USER:
      return { initialState }; // Reset state to initial state
    default:
      return state;
  }
};

export default UserReducer;
