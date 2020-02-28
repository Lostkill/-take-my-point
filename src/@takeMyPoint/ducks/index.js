import { combineReducers } from 'redux'

import UserDuck from './user-duck'
import PointDuck from './point-duck'

export default combineReducers({
  UserDuck,
  PointDuck
})
