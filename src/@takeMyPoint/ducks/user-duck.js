// Action Types
export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
  UPDATE: 'auth/UPDATE',
  FETCH_ERROR: 'auth/FETCH_ERROR'
}

// Reducer
const initialState = {
  isLogged: false,
  token: null,
  user: {},
  error: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        isLogged: true,
        user: action.user,
        token: action.token,
        error: null
      }
    case Types.LOGOUT:
      return {
        isLogged: false,
        token: null,
        user: {},
        error: null
      }
    case Types.UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user
        }
      }
    case Types.FETCH_ERROR:
      return {
        ...state,
        error: action.error
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

export function fetchError (error) {
  return {
    type: Types.FETCH_ERROR,
    error
  }
}

export function updateUser (user) {
  return {
    type: Types.UPDATE,
    user
  }
}
