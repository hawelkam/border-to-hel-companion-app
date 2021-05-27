import { combineReducers } from "redux";
import { getTeamsReducer } from "./TeamReducer";

const rootReducer = combineReducers({
  teams: getTeamsReducer,
});

export default rootReducer;
