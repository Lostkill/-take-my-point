import React from 'react'
import styled, { withTheme } from 'styled-components'

const LogoImage = props => (
  <div className='logo d-flex justify-content-center align-items-center'>
    <LogoCompanySize
      src={require(`../../assets/images/${props.theme.enterpriseLogo}/icon.png`)}
      alt='logo_company'
    />
  </div>
)

export default withTheme(LogoImage)

const LogoCompanySize = styled.img`
  width: 50%;
`
