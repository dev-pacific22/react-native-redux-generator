import { SIGN_IN_CLICKED, SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_IN_RESET } from "./types";
import { postRequestApi } from "../../network/NetworkManager";
import { AUTHENTIC_USER } from "../../network/URL";
export const signInClickedAction = message => {
  return {
    type: SIGN_IN_CLICKED,
    payload: {
      message: message
    }
  };
};

export const signInAction = (username, password) => {
  const params = {
    username,
    password
  };
  return dispatch => {
    postRequestApi(
      AUTHENTIC_USER,
      params,
      dispatch,
      SIGN_IN_SUCCESS,
      SIGN_IN_FAILED,
      SIGN_IN_CLICKED,
      true, 
    );
  };
};

export const resetAction = () => {
  return { type: SIGN_IN_RESET };
};