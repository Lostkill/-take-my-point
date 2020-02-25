import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../@takeMyPoint/thunks/login-thunk'
import enterpriseSettings from '../config/enterprises'

import LoginView from '../screens/login-view'

function LoginContainer (props) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [company] = useState('solides')

  function handleSubmit () {
    if (email && password) {
      const payload = { email, password }
      props.setLogin(payload)
    }
  }

  return (
    <div>
      <LoginView
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        enterprise={enterpriseSettings[company]}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (payload) => dispatch(loginThunk.auth(payload))
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
