import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import AuthReducers from "./AuthReducer";

export default combineReducers({
  app: AppReducer,
  auth: AuthReducers,
});
