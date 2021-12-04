export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const ADD_BIRTHDAY = "ADD_BIRTHDAY"
export const UPDATE_BIRTHDAYS = "UPDATE_BIRTHDAYS"

export const loginUser = data => ({
  type: USER_LOGIN,
  payload: data
})

export const logoutUser = () => ({
  type: USER_LOGOUT
})

export const addBirthday = birthday => ({
  type: ADD_BIRTHDAY,
  payload: birthday
})

export const updateBirthdays = array => ({
  type: UPDATE_BIRTHDAYS,
  payload: array
})