import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
  } from "../constants";
  
  const initialState = {
    isFetching: false,
    posts: [],
    errorMassage: ""
  };
  
  export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST: {
        return {
          ...state,
          isFetching: true
        };
      }
      case FETCH_POSTS_SUCCESS: {
        return {
          ...state,
          isFetching: false,
          posts: action.payload
        };
      }
      case FETCH_POSTS_FAILURE: {
        return {
          ...state,
          isFetching: false,
          errorMassage: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };
  