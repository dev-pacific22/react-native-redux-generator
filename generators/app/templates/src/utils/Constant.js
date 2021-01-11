 const  API_TIME_OUT = 4000;
 const CONSTANTS = {
    REGEX: {
      EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      PASSWORD_REGEX: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    }
  };
  const AUTH_STATUS = {
    NOT_INITIATED : "not_initiated", 
    SUCCESS : "success" , 
    FAILED : "failed"

  }

  export {AUTH_STATUS, CONSTANTS,  API_TIME_OUT};