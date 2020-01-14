 const  API_TIME_OUT = 4000;
 const CONSTANTS = {
    REGEX: {
      EMAIL_REGEX: "",
      PASSWORD_REGEX: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    }
  };
  const AUTH_STATUS = {
    NOT_INITIATED : "not_initiated", 
    SUCCESS : "success" , 
    FAILED : "failed"

  }

  export {AUTH_STATUS, CONSTANTS,  API_TIME_OUT};