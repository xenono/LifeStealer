import Cookies from "universal-cookie";
import {
  FETCH_POSTS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILED, EDIT_USER_SUCCESS
} from "actions/action";

const cookies = new Cookies();

const isLoggedInByCookie = cookies.get("isLoggedIn") === "true";

const initialState = {
  isLoggedIn: isLoggedInByCookie,
  posts: [],
  user: {
    name: "",
    lastname: "",
    profileImage: "",
    job: "",
    country: "",
    city: "",
    backgroundImage: "",
    introduction: "",
    workDescription: "",
    hobbyDescription: ""
  },
  error: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case LOGOUT_FAILED:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts,action.payload.data]
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        error: action.payload
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data
      };
    case GET_USER_FAILED:
      return {
        ...state
      }
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: {...action.payload}
      }
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;