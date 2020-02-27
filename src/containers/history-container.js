import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import enterpriseSettings from '../config/enterprises'

import { logout } from '../@takeMyPoint/ducks/login-duck'
import { setPointThunk } from '../@takeMyPoint/thunks/user-thunk'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import HistoryView from '../screens/history-view'

function Home (props) {
  const company = 'solides'
  const [menu] = useState(menuOptions)
  const [dateSelected, setDateSelected] = useState([])

  const { user } = props
  function requestAllPoints () {
    props.getAllPoints(user._id)
  }

  useEffect(() => {
    requestAllPoints()
  }, [])

  const { lastPoint, logout } = props
  return (
    <div>
      <HeaderBar
        menu={menu}
        enterprise={enterpriseSettings[company]}
        activePoint={lastPoint.type === 'ENTRY' && true}
        setLogout={logout}
      />
      <HistoryView
        points={props.points}
        dateSelected={dateSelected}
        setDateSelected={(item) => setDateSelected(item)}
        isFetching={props.isFetching}
      />
    </div>
  )
}

const mapStateToProps = ({ LoginDuck, UserDuck }) => {
  const { user } = LoginDuck
  const { lastPoint, points, isFetching } = UserDuck

  return {
    user,
    lastPoint,
    points,
    isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getAllPoints: (payload) => dispatch(setPointThunk.getAll(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
