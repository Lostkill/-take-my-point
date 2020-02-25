import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import enterpriseSettings from '../config/enterprises'

import moment from 'moment-timezone'
import { logout } from '../@takeMyPoint/ducks/login-duck'
import { setLastPoint } from '../@takeMyPoint/ducks/user-duck'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import HomeView from '../screens/home-view'

function Home (props) {
  const company = 'solides'
  const [menu] = useState(menuOptions)
  const [wayTakePoint, setWayTakePoint] = useState('manual')
  const [activePoint, setActivePoint] = useState(props.lastPoint.type)

  const { setPoint } = props
  useEffect(() => {
    function dispatchSetPoint () {
      const payload = {
        type: activePoint,
        date: moment().format()
      }
      setPoint(payload)
    }

    dispatchSetPoint()
  }, [setPoint, activePoint])

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
        setActivePoint={setActivePoint}
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
    setPoint: (payload) => dispatch(setLastPoint(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
