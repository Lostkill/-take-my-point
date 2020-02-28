import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { loginThunk } from '../@takeMyPoint/thunks/user-thunk'
import { menuOptions } from '../config/menu-options'

import HeaderBar from '../components/Header'
import ProfileView from '../screens/profile-view'

function ProfileContainer (props) {
  const [menu] = useState(menuOptions)
  const [edit, setEdit] = useState(false)
  const [state, setState] = useState({
    email: props.user.email,
    username: props.user.username,
    language: props.user.language
  })
  const [activePoint, setActivePoint] = useState('EXIT')

  const { points } = props
  useEffect(() => {
    points.map((item) => {
      return setActivePoint(item.point[item.point.length - 1].type)
    })
  }, [points])

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  function handleSubmit () {
    if (state) {
      props.setUpdate(props.user._id, state)
    }
  }

  return (
    <div className='wrapper'>
      <HeaderBar
        menu={menu}
        activePoint={activePoint === 'ENTRY' && true}
      />
      <ProfileView
        edit={edit}
        handleSubmit={handleSubmit}
        fieldsValues={state}
        handleChange={handleChange}
        setEdit={setEdit}
        user={props.user}
      />
    </div>
  )
}

const mapStateToProps = ({ UserDuck, PointDuck }) => {
  const { user } = UserDuck
  const { points } = PointDuck

  return {
    user,
    points
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUpdate: (userId, payload) => dispatch(loginThunk.update(userId, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
