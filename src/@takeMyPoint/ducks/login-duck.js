// Action Types
export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT'
}

// Reducer
const initialState = {
  isLogged: false,
  token: null,
  user: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        isLogged: true,
        user: action.user,
        token: action.token
      }
    case Types.LOGOUT:
      return {
        isLogged: false
      }
    default:
      return state
  }
}

// Action Creators
export function login (user, token) {
  return {
    type: Types.LOGIN,
    user,
    token
  }
}

export function logout () {
  return {
    type: Types.LOGOUT,
    isLogged: false,
    token: null,
    user: {}
  }
}
