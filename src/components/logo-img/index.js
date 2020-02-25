import React from 'react'

const LogoImage = props => (
  <div className='logo'>
    <img
      src={require(`../../assets/images/${props.enterprise.logo}/icon.png`)}
      width={props.width}
      alt='logo_company'
    />
  </div>
)

export default LogoImage
