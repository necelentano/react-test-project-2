import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from "../constants";
  
  import { loginUser, logoutUser } from "../../services/services";
  
  export const login = (username, password) => dispatch => {
    dispatch(request());
    loginUser(username, password);
    if (JSON.parse(localStorage.getItem("isLogged"))) {
      dispatch(success());
    } else dispatch(failure());
  };
  const request = () => {
    return { type: LOGIN_REQUEST };
  };
  const success = () => {
    return { type: LOGIN_SUCCESS };
  };
  const failure = () => {
    return { type: LOGIN_FAILURE };
  };
  
  export const logout = () => {
    logoutUser();
    return { type: LOGOUT };
  };
  