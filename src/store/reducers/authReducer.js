import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from "../constants";
  
  const initialState = {
    isLoging: false,
    isLogged: false,
    username: ''
  };
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          isLoging: true,
          isLogged: false,
          username: action.payload
        };
      case LOGIN_SUCCESS:
        return { 
          isLoging: false, 
          isLogged: true,
          username: action.payload };
      case LOGIN_FAILURE:
        return {};
      case LOGOUT:
        return {
          isLoging: false,
          isLogged: false,
          username: ''
        };
      default:
        return state;
    }
  };