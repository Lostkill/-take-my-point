import api from '../resources/api'
import { login, fetchError, updateUser } from '../ducks/user-duck'

const loginThunk = {
  auth: (payload) => dispatch => {
    api.post('/auth', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      if (res.status === 200) {
        dispatch(login(res.data.user, res.data.token))
      } else {
        dispatch(fetchError(res.data.error))
      }
    })
  },
  create: (payload) => dispatch => {
    api.post('/register', {
      username: payload.username,
      email: payload.email,
      password: payload.password,
      user_role: 'REGULAR',
      language: payload.language,
      enterprise_id: '5e506e9524c972365c942975'
    }).then(res => {
      if (res.status === 200) {
        dispatch(login(res.data.user, res.data.token))
      } else {
        dispatch(fetchError(res.data.error))
      }
    })
  },
  update: (userId, payload) => dispatch => {
    api.put('/update/' + userId, {
      ...payload
    }).then(res => dispatch(updateUser(payload)))
  }
}

export { loginThunk }
