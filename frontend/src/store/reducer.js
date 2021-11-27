import { USER_LOGIN, USER_LOGOUT, ADD_BIRTHDAY } from "./actions";

const authReducer = (state, action) => {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null
      }
    default:
      return state
  }
}

const birthdayReducer = (state, action) => {
  switch(action.type){
    case ADD_BIRTHDAY:
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
    default:
      return state
  }
}

export { authReducer, birthdayReducer }