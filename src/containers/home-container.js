import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setPointThunk } from '../@takeMyPoint/thunks/point-thunk'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import HomeView from '../screens/home-view'

function Home (props) {
  const [menu] = useState(menuOptions)
  const [wayTakePoint, setWayTakePoint] = useState('manual')
  const [activePoint, setActivePoint] = useState('EXIT')

  const { points } = props
  useEffect(() => {
    points.map((item) => {
      return setActivePoint(item.point[item.point.length - 1].type)
    })
  }, [points])

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
    <div className='wrapper'>
      <HeaderBar
        menu={menu}
        activePoint={activePoint === 'ENTRY' && true}
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

const mapStateToProps = ({ UserDuck, PointDuck }) => {
  const { user } = UserDuck
  const { lastPoint, points } = PointDuck

  return {
    user,
    lastPoint,
    points
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPointThunk: (payload) => dispatch(setPointThunk.create(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
