import { combineReducers } from "redux";
import { legsReducer } from "./LegReducer";
import { getTeamsReducer } from "./TeamReducer";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({
  teams: getTeamsReducer,
  legs: legsReducer,
  user: userReducer,
});

export default rootReducer;
