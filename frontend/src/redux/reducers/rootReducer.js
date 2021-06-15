import { combineReducers } from "redux";
import adds from "./adds.reducer";
const rootReducer = combineReducers({
  adds,
});

export default rootReducer;
