import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
  } from "../constants";
  
  export const fetchingPostsRequest = () => {
    return {
      type: FETCH_POSTS_REQUEST,
      isFetching: true
    };
  };
  
  export const fetchingPostsSucces = json => {
    return {
      type: FETCH_POSTS_SUCCESS,
      isFetching: false,
      payload: json
    };
  };
  
  export const fetchingPostsFailure = error => {
    return {
      type: FETCH_POSTS_FAILURE,
      isFetching: false,
      payload: error
    };
  };
  
  export const fetchPosts = () => async dispatch => {
    dispatch(fetchingPostsRequest());
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const json = await response.json();
      dispatch(fetchingPostsSucces(json));
    } catch (error) {
      dispatch(fetchingPostsFailure(error));
    }
  };
  