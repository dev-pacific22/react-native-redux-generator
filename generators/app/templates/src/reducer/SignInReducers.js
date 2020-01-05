import{SIGN_IN_CLICKED}  from  "../action/types";

const initialState = {
message : "I am from reducers and initial state"
}; 

export default (state = initialState, {type, payload}) => {
  switch (type) {
      case SIGN_IN_CLICKED:
          return {
              ...state, message:payload.message
          }
          break;
  
      default:
          return state; 
          break;
  }
};
