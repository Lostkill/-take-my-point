import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../@takeMyPoint/thunks/user-thunk'
import { fetchError } from '../@takeMyPoint/ducks/user-duck'
import enterpriseSettings from '../config/enterprises'

import RegisterView from '../screens/register-view'

function RegisterContainer (props) {
  const [company] = useState('solides')
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    language: 'pt'
  })
  const [strength, setPasswordStrength] = useState('low')

  const { fetchError } = props
  useEffect(() => {
    fetchError('')
  }, [fetchError])

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    })
    props.fetchError('')
  }

  const {
    email,
    username,
    password,
    language
  } = state

  useEffect(() => {
    if (password.length >= 10) {
      setPasswordStrength('high')
    } else if (password.length > 5 && password.length < 10) {
      setPasswordStrength('medium')
    } else {
      setPasswordStrength('low')
    }
  }, [password])

  function handleSubmit () {
    if (email && username && password && language) {
      props.setRegister(state)
    }
  }

  return (
    <div>
      <RegisterView
        error={props.error}
        fieldsValues={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        enterprise={enterpriseSettings[company]}
        passwordStrength={strength}
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
    setRegister: (payload) => dispatch(loginThunk.create(payload)),
    fetchError: (error) => dispatch(fetchError(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
