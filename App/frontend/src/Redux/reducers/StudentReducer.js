import * as actiontypes from "../actions/type.js";
import { SIGNOUT_USER } from "../actions/type.js";

const initialState = [];

const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.GETALL_STUDENTS:
      return action.payload;
    case actiontypes.TOGGLE_STUDENT_TAB:
      return action.payload;
    case actiontypes.UPDATE_STUDENT:
      return state.map((student) => {
        return student.id === action.payload.id
          ? { ...state, data: action.payload.data }
          : student;
      });
    case actiontypes.DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload.id);
    case SIGNOUT_USER:
      return { initialState }; // Reset state to initial state
    default:
      return state;
  }
};

export default StudentReducer;
