import{SIGN_IN_CLICKED, SIGN_IN_SUCCESS, SIGN_IN_FAILED}  from  "../action/types";
import { translate } from "../locales";
import { CONSTANTS, AUTH_STATUS } from "../utils";

const initialState = {
message : "I am from reducers and initial state", 
isSignInSuccess : false,
authStatus: ""
}; 

export default (state = initialState, {type, payload}) => {
  switch (type) {
      case SIGN_IN_CLICKED:
          return {
              ...state, message:payload.message
          }
          break;
  
          case SIGN_IN_SUCCESS: 
          return {
              ...state,   isSignInSuccess:true, authStatus: AUTH_STATUS.SUCCESS, message: translate("message_auth_success")

          }
          case SIGN_IN_FAILED: 
          return {
              ...state, isSignInSuccess:false, authStatus: AUTH_STATUS.FAILED,  message:payload.message
          }
      default:
          return state; 
          break;
  }
};
