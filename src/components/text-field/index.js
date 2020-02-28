import React from 'react'
import styled from 'styled-components'

import TextFieldComponent from '@material-ui/core/TextField'

const TextField = props => (
  <TextFieldWrapper>
    <TextFieldComponent
      id='standard-name'
      label={props.label}
      value={props.value}
      type={props.type}
      className='loginField'
      fullWidth={props.fullWidth && true}
      onChange={props.onChange}
      margin={props.margin}
    />
  </TextFieldWrapper>
)

export default TextField

const TextFieldWrapper = styled.div`
  margin: 10px 0px;
`
