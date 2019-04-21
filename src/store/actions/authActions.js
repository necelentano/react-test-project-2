import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from "../constants";
  
  import { loginUser } from "../../services/services";
  
  export const login = (username, password) => dispatch => {
    dispatch(request(username));
    const isAuth = loginUser(username, password);
    if (isAuth) {
      dispatch(success(username));
    } else dispatch(failure());
  };
  const request = username => {
    return { type: LOGIN_REQUEST, payload: username };
  };
  const success = username => {
    return { type: LOGIN_SUCCESS, payload: username };
  };
  const failure = () => {
    return { type: LOGIN_FAILURE };
  };
  
  export const logout = () => {
    return { type: LOGOUT };
  };
  