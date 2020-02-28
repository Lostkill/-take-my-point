import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setPointThunk } from '../@takeMyPoint/thunks/point-thunk'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import HistoryView from '../screens/history-view'

function HistoryContainer (props) {
  const [menu] = useState(menuOptions)
  const [dateSelected, setDateSelected] = useState([])
  const [activePoint, setActivePoint] = useState('EXIT')

  const { user, getAllPoints } = props
  useEffect(() => {
    function requestAllPoints () {
      getAllPoints(user._id)
    }
    requestAllPoints()
  }, [user, getAllPoints])

  const { points } = props
  useEffect(() => {
    points.map((item) => {
      return setActivePoint(item.point[item.point.length - 1].type)
    })
  }, [points])

  return (
    <div>
      <HeaderBar
        menu={menu}
        activePoint={activePoint === 'ENTRY' && true}
      />
      <HistoryView
        points={props.points}
        dateSelected={dateSelected}
        setDateSelected={(item) => setDateSelected(item)}
        isFetching={props.isFetching}
        user={props.user}
      />
    </div>
  )
}

const mapStateToProps = ({ UserDuck, PointDuck }) => {
  const { user } = UserDuck
  const { points, isFetching } = PointDuck

  return {
    user,
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
