import React from 'react'
import { withTheme } from 'styled-components'

const LogoImage = props => (
  <div className='logo'>
    <img
      src={require(`../../assets/images/${props.theme.enterpriseLogo}/icon.png`)}
      width={props.width}
      alt='logo_company'
    />
  </div>
)

export default withTheme(LogoImage)
