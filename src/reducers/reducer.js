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
  GET_USER_FAILED,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  RESET_FORM_DATA,
  DROP_BLOOD_SUCCESS,
  DROP_BLOOD_FAILED,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_SUCCESS
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
  formData : {
    error: "",
    successSubmission: false
  }
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
        posts: [...state.posts,action.payload.data],
        formData : {
          error: '',
          successSubmission: true
        }
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        formData : {
          error: action.payload,
          successSubmission: false
        }
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
        user: {...action.payload},
        formData : {
          error: '',
          successSubmission: true
        }
      }
    case EDIT_USER_FAILED:
      return {
        ...state,
        formData : {
          error: action.payload,
          successSubmission: false
        }
      }
    case RESET_FORM_DATA:
      return {
        ...state,
        formData : {
          error: '',
          successSubmission: false
        }
      }
    case DROP_BLOOD_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post._id === action.payload.postId){
            if(action.payload.isActive){
              post.usersBlood += 1
              post.isUserBlood = true
            }
            else {
              post.usersBlood -= 1
              post.isUserBlood = false
            }
          }
          return post
        })
      }
    case DROP_BLOOD_FAILED:
      return {
        ...state,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post._id === action.payload.postId){
            post.comments.push(action.payload.comment.data)
          }
          return post
        })
      }
    case ADD_COMMENT_FAILED:
      return {
        ...state,
      }
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;