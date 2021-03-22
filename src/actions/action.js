import axios from "axios";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchPosts = () => async dispatch => {
  try {
    const resultData = await axios.get(API_URL + "/posts", {
      withCredentials: true
    });
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: {
        posts: resultData.data.posts
      }
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const result = await axios.get(API_URL + "/logout", {
      withCredentials: true
    });
    dispatch({ type: LOGOUT_SUCCESS } );
  } catch (err) {
    console.log(err);
    dispatch({ type: LOGOUT_FAILED });
  }
};

export const loginUser = () => dispatch => {
  dispatch({ type: LOGIN_SUCCESS });
}