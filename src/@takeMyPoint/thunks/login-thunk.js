import api from '../resources/api'
import { login } from '../ducks/login-duck'

const loginThunk = {
  auth: (payload) => dispatch => {
    api.post('/auth', {
      email: payload.email,
      password: payload.password
    }).then(res => dispatch(login(res.data.user, res.data.token)))
  }
}

export { loginThunk }
