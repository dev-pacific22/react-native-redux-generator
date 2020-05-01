import {
  SIGN_IN_CLICKED,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_IN_RESET
} from "../action/types";
import { translate } from "../locales";
import { CONSTANTS, AUTH_STATUS } from "../utils";

const initialState = {
  message: "I am from reducers and initial state",
  isSignInSuccess: false,
  loading: false,
  authStatus: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_CLICKED:
      return {
        ...state,
        loading: true,
      };
      break;

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
    case SIGN_IN_RESET:
      return {
        ...state,
        message: "",
        loading: false,
        authStatus: "",
      };
    default:
      return state;
      break;
  }
};
