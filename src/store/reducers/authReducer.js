import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from "../constants";
  
  const initialState = {
    isLoging: false,
    isLogged: false
  };
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          isLoging: true,
          isLogged: false
        };
      case LOGIN_SUCCESS:
        return { isLoging: false, isLogged: true };
      case LOGIN_FAILURE:
        return {};
      case LOGOUT:
        return {
          isLoging: false,
          isLogged: false
        };
      default:
        return state;
    }
  };