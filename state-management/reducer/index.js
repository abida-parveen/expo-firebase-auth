import { combineReducers } from "redux";
import authReucer from "./authReducer";

export default combineReducers({
  auth: authReucer,
});
