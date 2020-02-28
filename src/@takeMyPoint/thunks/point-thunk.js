import api from '../resources/api'
import moment from 'moment-timezone'
import { setPoint, getPoints, setIsFetching } from '../ducks/point-duck'

const setPointThunk = {
  getAll: (userId) => dispatch => {
    dispatch(setIsFetching(true))
    api.get(`/points?user_id=${userId}`)
      .then(res => {
        dispatch(getPoints(res.data.points))
        dispatch(setIsFetching(false))
      })
  },
  create: (payload) => dispatch => {
    api.post('/new_point', {
      type: payload.type,
      date: moment().format(),
      day: moment().format('DD-MM-YYYY'),
      user_id: payload.user_id,
      enterprise_id: payload.enterprise_id
    }).then(res => dispatch(setPoint(res.data.point)))
  }
}

export { setPointThunk }
