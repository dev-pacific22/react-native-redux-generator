import { SIGN_IN_CLICKED } from "./types";
export const signInClickedAction = (message) => {
  return {
      type : SIGN_IN_CLICKED, 
      payload : {
          message: message
      }
  }
};
;