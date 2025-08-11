import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk"; // Correct import

import StudentReducer from "./reducers/StudentReducer";
import UserReducer from "./reducers/UserReducer";
import TabReducer from "./reducers/TabReducer";
import authReducer from "./reducers/AuthReducers";

const reducers = combineReducers({
  student: StudentReducer,
  user: UserReducer,
  CurrentTab: TabReducer,
  auth: authReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)) // Apply thunk middleware directly
);

export default store;
