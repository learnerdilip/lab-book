import { combineReducers } from "redux";
import user from "./user/reducer";
import notes from "./notes/reducer";
export default combineReducers({
  // your reducers will go here
  user,
  notes
});
