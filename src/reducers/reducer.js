import {
  FETCH_SUCCESS,
  AUTH_SUCCESS,
  ADD_ITEM_SUCCESS,
  FETCH_ALL_SUCCESS,
  DELETE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  FETCH_FAILURE
} from "actions/action";

const initialState = {
  isLoggedIn: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.data
      };
    case "Logout":
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;