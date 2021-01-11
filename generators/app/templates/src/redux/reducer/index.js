import { combineReducers } from "redux";
import SignInReducers from "./SignInReducers";

export default combineReducers({
  signIn: SignInReducers
});
