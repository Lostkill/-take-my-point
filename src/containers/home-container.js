import React, { useState } from 'react'
import { connect } from 'react-redux'
import enterpriseSettings from '../config/enterprises'

import { logout } from '../@takeMyPoint/ducks/login-duck'
import { setPointThunk } from '../@takeMyPoint/thunks/user-thunk'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import HomeView from '../screens/home-view'

function Home (props) {
  const company = 'solides'
  const [menu] = useState(menuOptions)
  const [wayTakePoint, setWayTakePoint] = useState('manual')
  const [activePoint, setActivePoint] = useState(props.lastPoint.type)

  function dispatchSetPoint (type) {
    setActivePoint(type)
    const { setPointThunk, user } = props
    const userId = user._id
    const enterpriseId = user.enterprise_id
    const payload = {
      type,
      user_id: userId,
      enterprise_id: enterpriseId
    }
    setPointThunk(payload)
  }

  return (
    <div>
      <HeaderBar
        menu={menu}
        enterprise={enterpriseSettings[company]}
        activePoint={activePoint === 'ENTRY' && true}
        setLogout={props.logout}
      />
      <HomeView
        menu={menu}
        user={props.user}
        wayTakePoint={wayTakePoint}
        setWayTakePoint={setWayTakePoint}
        activePoint={activePoint}
        setActivePoint={dispatchSetPoint}
      />
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
    logout: () => dispatch(logout()),
    setPointThunk: (payload) => dispatch(setPointThunk.create(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
