import React, { useState, useEffect } from 'react'

function SessionProvider (props) {
  const [token, setToken] = useState(props.token)
  const [tokenIsValid, setTokenIsValid] = useState()

  useEffect(() => {
    if (!props.token) {
      setTokenIsValid(false)
    } else {
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
