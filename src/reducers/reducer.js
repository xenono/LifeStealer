import Cookies from 'universal-cookie'
import {
  FETCH_POSTS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED
} from "actions/action";

const cookies = new Cookies()

const isLoggedInByCookie = cookies.get('isLoggedIn') === 'true'

const initialState = {
  isLoggedIn: isLoggedInByCookie,
  posts: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }
    case LOGOUT_FAILED:
      return {
        ...state
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;