import React, { useState } from 'react'
import { connect } from 'react-redux'
import enterpriseSettings from '../config/enterprises'

import { logout } from '../@takeMyPoint/ducks/login-duck'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'

function Home (props) {
  const company = 'solides'
  const [menu] = useState(menuOptions)

  return (
    <div>
      <HeaderBar
        menu={menu}
        enterprise={enterpriseSettings[company]}
        activePoint={props.lastPoint.type === 'ENTRY' && true}
        setLogout={props.logout}
      />
      <h1>History Page</h1>
    </div>
  )
}

const mapStateToProps = ({ LoginDuck, UserDuck }) => {
  const { user } = LoginDuck
  const { lastPoint } = UserDuck

  return {
    user,
    lastPoint
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
