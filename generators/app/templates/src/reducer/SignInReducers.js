import{SIGN_IN_CLICKED, SIGN_IN_SUCCESS, SIGN_IN_FAILED}  from  "../action/types";

const initialState = {
message : "I am from reducers and initial state", 
isLoggedIn : false,
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
              ...state,   isLoggedIn:true, message:payload.data.firstName
          }
          case SIGN_IN_FAILED: 
          return {
              ...state, isLoggedIn:false, message:payload.message
          }
      default:
          return state; 
          break;
  }
};
