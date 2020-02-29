import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function PasswordStrength (props) {
  const [barColor, setBarColor] = useState()
  const { strength } = props
  useEffect(() => {
    if (strength === 'high') {
      setBarColor('#14c07b')
    } else if (strength === 'medium') {
      setBarColor('#c0ff29')
    } else {
      setBarColor('#b50000')
    }
  }, [strength])

  return (
    <div>
      <StrengthBar color={barColor} />
    </div>
  )
}

export default PasswordStrength

const StrengthBar = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${props => props.color ? props.color : '#fefefefe'}
`
