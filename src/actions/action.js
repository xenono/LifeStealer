import axios from "axios";
import { generateBase64FromImage } from "../utils";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const API_URL = "https://lifestealer.herokuapp.com"

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
    if (err.response)
      console.log(err.response.data.message);
    console.log(err);
  }
};

export const addPost = (title, content, color, file) => async dispatch => {
  // const fileBuffer = await generateBase64FromImage(file)
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("background", color);
  formData.append("images", file);
  try {
    const post = await axios.post(API_URL + "/createPost", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    dispatch({ type: ADD_POST_SUCCESS });
  } catch (err) {
    if (err.response)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({ type: ADD_POST_FAILED });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    const result = await axios.get(API_URL + "/logout", {
      withCredentials: true
    });
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOGOUT_FAILED });
  }
};

export const loginUser = () => dispatch => {
  dispatch({ type: LOGIN_SUCCESS });
};

export const getUser = () => async dispatch => {
  try {
    const user = await axios.get(API_URL + "/user", {
      withCredentials: true
    });
    dispatch({ type: GET_USER_SUCCESS, payload: user });
  } catch (err) {
    if (err.response)
      console.log(err.response.data.message);
    console.log(err);
  }
};

export const editUser = ({
                           city,
                           country,
                           job,
                           workDescription,
                           introduction,
                           hobbyDescription,
                           profileImage,
                           backgroundImage
                         }) => async dispatch => {
  const formData = new FormData();
  formData.append("city", city);
  formData.append("country", country);
  formData.append("job", job);
  formData.append("workDescription", workDescription);
  formData.append("introduction", introduction);
  formData.append("hobbyDescription", hobbyDescription);
  // formData.append("profileImage", profileImage);
  // formData.append("backgroundImage", backgroundImage);
  if(backgroundImage)
    formData.append("images", backgroundImage);
  if(profileImage)
    formData.append("images", profileImage);
  try {
    await axios.post(API_URL + "/editUser", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  } catch (err) {
    if (err.response)
      console.log(err.response.data.message);
    console.log(err);
  }
};