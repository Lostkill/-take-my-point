import React, { useState, useEffect } from 'react'
import api from '../@takeMyPoint/resources/api'

function SessionProvider (props) {
  const [token, setToken] = useState(props.token)
  const [tokenIsValid, setTokenIsValid] = useState()

  useEffect(() => {
    if (!props.token) {
      setTokenIsValid(false)
    } else {
      api.setHeaders({ Authorization: `Bearer ${props.token}` })
      setToken(props.token)
      setTokenIsValid(true)
    }
  }, [props.token, token])

  return (
    <div>
      {props.children(
        tokenIsValid
      )}
    </div>
  )
}

export default SessionProvider
