const initialState = {
  isLoggedIn: false,
}

const rootReducer = (state=initialState,action) => {
  return {
    ...state
  }
}

export default rootReducer