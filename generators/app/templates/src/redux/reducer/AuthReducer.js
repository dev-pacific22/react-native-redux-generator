import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from "../action/types";
import { translate } from "../../locales";
import { CONSTANTS, AUTH_STATUS } from "../../utils";

const initialState = {
  message: "I am from reducers and initial state",
  isSignInSuccess: false,
  authStatus: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignInSuccess: true,
        authStatus: AUTH_STATUS.SUCCESS,
        message: translate("message_sign_in_success"),
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        loading: false,
        isSignInSuccess: false,
        authStatus: AUTH_STATUS.FAILED,
        message: payload.message,
      };
    default:
      return state;
      break;
  }
};
