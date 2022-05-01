import axios from "axios";
import { API_TIME_OUT } from "../utils/Constant";

const configHeader = async (token = "") => {
  // Can get the token from async storage.
  return (header = {
    headers: {
      "Content-Type": "application/json",
      access_token: token,
    },
    timeout: API_TIME_OUT,
  });
};

export const getRequestApi = async (
  URL,
  dispatch,
  actionSuccess,
  actionFail,
  actionLoading,
  isLoadingRequired = false
) => {
  if (isLoadingRequired) {
    dispatch({ type: actionLoading });
  }
  let headers = await configHeader();
  try {
    const response = axios.get(URL, headers);
    dispatch({ type: actionSuccess, payload: response.data });
    return response;
  } catch (error) {
    dispatch({ type: actionFail, payload: error.message });
    return error;
  }
};

export const postRequestApi = async (
  URL,
  params,
  dispatch,
  actionSuccess,
  actionFail,
  actionLoading,
  isLoadingRequired = false
) => {
  if (isLoadingRequired) {
    dispatch({ type: actionLoading });
  }

  const headers = await configHeader();
  try {
    const response = axios.get(URL, params, headers);
    dispatch({ type: actionSuccess, payload: response.data });
    return response;
  } catch (error) {
    dispatch({ type: actionFail, payload: error.message });
    return error;
  }
};
