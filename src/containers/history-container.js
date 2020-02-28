import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import enterpriseSettings from '../config/enterprises'

import { setPointThunk } from '../@takeMyPoint/thunks/point-thunk'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import HistoryView from '../screens/history-view'

function HistoryContainer (props) {
  const company = 'solides'
  const [menu] = useState(menuOptions)
  const [dateSelected, setDateSelected] = useState([])

  const { user, getAllPoints } = props
  useEffect(() => {
    function requestAllPoints () {
      getAllPoints(user._id)
    }
    requestAllPoints()
  }, [user, getAllPoints])

  const { lastPoint } = props
  return (
    <div>
      <HeaderBar
        menu={menu}
        enterprise={enterpriseSettings[company]}
        activePoint={lastPoint.type === 'EXIT' && true}
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

const mapStateToProps = ({ UserDuck, PointDuck }) => {
  const { user } = UserDuck
  const { lastPoint, points, isFetching } = PointDuck

  return {
    user,
    lastPoint,
    points,
    isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPoints: (payload) => dispatch(setPointThunk.getAll(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
