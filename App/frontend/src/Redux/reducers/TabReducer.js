
import { ALL_USERS, TOGGLE_TAB } from "../actions/type.js";

const initialState = ALL_USERS;

const TabReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return action.selected;

    default:
      return state;
  }
};

export default TabReducer;
