import axios from "axios";
import {API_TIME_OUT} from "../utils/Constant"

const configHeader = async (token = "") => {
  // Can get the token from async storage.
  return (header = {
    headers: {
      "Content-Type": "application/json",
      access_token: token
    }, 
    timeout: API_TIME_OUT
  });
};

export const getRequestApi = async (
  URL,
  dispatch,
  actionSuccess,
  actionFail
) => {
  let headers = await configHeader();
  return axios
    .get(URL, headers)
    .then(response => {
      dispatch({ type: actionSuccess, payload: response });
    })
    .catch(error => {
      dispatch({ type: actionFail, payload: error.message });
    });
};


export const postRequestApi = async (
    URL,
    params,
    dispatch,
    actionSuccess,
    actionFail
  ) => {
    const headers = await configHeader();
    return axios
      .post(URL, params, headers)
      .then(response => {
        dispatch({ type: actionSuccess, payload: response });
      })
      .catch(error => {    
        dispatch({ type: actionFail, payload: error });
      });
  };
