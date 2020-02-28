import React from 'react'
import { withTheme } from 'styled-components'

const LogoImage = props => (
  <div className='logo d-flex justify-content-center align-items-center'>
    <img
      src={require(`../../assets/images/${props.theme.enterpriseLogo}/icon.png`)}
      width={props.width ? props.width : '50%'}
      alt='logo_company'
    />
  </div>
)

export default withTheme(LogoImage)
