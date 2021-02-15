import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  ON_LOADING_START,
  ON_LOADING_STOP,
} from "./types";
import { postRequestApi } from "../../network/NetworkManager";
import { AUTHENTIC_USER } from "../../network/URL";
export const signInClickedAction = (message) => {};

export const signInAction = (username, password) => {
  const params = {
    username,
    password,
  };
  return async (dispatch) => {
    dispatch({ type: ON_LOADING_START });
    await postRequestApi(
      AUTHENTIC_USER,
      params,
      dispatch,
      SIGN_IN_SUCCESS,
      SIGN_IN_FAILED,
      null,
      true
    );
    dispatch({ type: ON_LOADING_STOP });
  };
};

export const resetAction = () => {
  return { type: SIGN_IN_RESET };
};
