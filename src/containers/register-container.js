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

  function handleSubmit () {
    if (state) {
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
