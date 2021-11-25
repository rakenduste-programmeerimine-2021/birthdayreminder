import { createContext, useReducer } from "react";
import { /* birthdayReducer, */ authReducer } from "./reducer";
import combineReducers from "react-combine-reducers"

/*
const initialBirthdays = {
  data: []
}
*/

const initialAuth = {
  token: sessionStorage.getItem('token') || null,
  user: JSON.parse(sessionStorage.getItem('user')) || null
}

const [combinedReducer, initialState] = combineReducers({
  /* birthdays: [birthdayReducer, initialBirthdays], */
  auth: [authReducer, initialAuth]
})

// We create the Context ie we create the global state
export const Context = createContext(initialState)

function Store({ children }){
  const [state, dispatch] = useReducer(combinedReducer, initialState)

  return (
    <Context.Provider value={[ state, dispatch ]}>
      { children }
    </Context.Provider>
  )
}

export default Store