import axios from "axios";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
export const EDIT_USER_FAILED = "EDIT_USER_FAILED"
export const RESET_FORM_DATA = "RESET_FORM_DATA"
export const DROP_BLOOD_SUCCESS = "DROP_BLOOD_SUCCESS"
export const DROP_BLOOD_FAILED = "DROP_BLOOD_FAILED"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const ADD_COMMENT_FAILED = "ADD_COMMENT_FAILED"
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS"
export const ADD_FRIEND_FAILED = "ADD_FRIEND_FAILED"
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS"
export const GET_FRIENDS_FAILED = "GET_FRIENDS_FAILED"


export const API_URL = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL_DEV : "") + "/api"


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
  formData.append("postImage", file);
  try {
    const post = await axios.post(API_URL + "/createPost", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    dispatch({ type: ADD_POST_SUCCESS, payload:post});
  } catch (err) {
    if (err.response)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({ type: ADD_POST_FAILED, payload: err.response.data.message });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    await axios.get(API_URL + "/logout", {
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
    // formData.append("images", backgroundImage);
    formData.append("backgroundImage", backgroundImage);
  if(profileImage)
    // formData.append("images", profileImage);
    formData.append("profileImage", profileImage);
  try {
    const data = await axios.post(API_URL + "/editUser", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    dispatch({type: EDIT_USER_SUCCESS, payload: data.data})
  } catch (err) {
    if (err)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({type: EDIT_USER_FAILED, payload: err.response.data.message})
  }
};

export const dropABlood = (postId, isActive) => async dispatch => {
  try {
    await axios.post(API_URL + "/dropABlood",{postId, isActive},{
      withCredentials: true
    })
    dispatch({type: DROP_BLOOD_SUCCESS, payload: {postId,isActive} })
  } catch (err){
    if (err)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({type: DROP_BLOOD_FAILED, payload: err.response.data.message})
  }
}

export const addComment = (postId, text) => async dispatch => {
  try {
    const comment = await axios.post(API_URL + "/addComment", {postId, text}, {
      withCredentials: true
    })
    dispatch({type: ADD_COMMENT_SUCCESS, payload: {postId,comment} })
  } catch (err) {
    if (err && err.response)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({type: ADD_COMMENT_FAILED, payload: err})
  }
}

export const addFriend = (userId) => async dispatch => {
  try {
    const addedUser = await axios.post(API_URL + "/addFriend", {
      userId
    },{withCredentials: true})
    dispatch({type: ADD_FRIEND_SUCCESS, payload: {addedUser} })
  }catch(err){
    if (err && err.response)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({type: ADD_FRIEND_FAILED, payload: err})
  }
}

export const getFriends = () => async dispatch => {
  try {
    const friends = await axios.get(API_URL + "/getFriends",{withCredentials: true})
    dispatch({type: GET_FRIENDS_SUCCESS, payload: friends})
  } catch(err) {
    if (err && err.response)
      console.log(err.response.data.message);
    console.log(err);
    dispatch({type: GET_FRIENDS_FAILED, payload: err})
  }
}
