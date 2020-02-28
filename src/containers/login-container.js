import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../@takeMyPoint/thunks/user-thunk'
import { fetchError } from '../@takeMyPoint/ducks/user-duck'

import LoginView from '../screens/login-view'

function LoginContainer (props) {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    })
    props.fetchError('')
  }

  function handleSubmit () {
    if (state.email && state.password) {
      props.setLogin(state)
    }
  }

  return (
    <div>
      <LoginView
        fieldsValues={state}
        error={props.error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

const mapStateToProps = ({ UserDuck }) => {
  const { error } = UserDuck

  return {
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (payload) => dispatch(loginThunk.auth(payload)),
    fetchError: (error) => dispatch(fetchError(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
