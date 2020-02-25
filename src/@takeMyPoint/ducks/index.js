import { combineReducers } from 'redux'

import LoginDuck from './login-duck'
import UserDuck from './user-duck'

export default combineReducers({
  LoginDuck,
  UserDuck
})
