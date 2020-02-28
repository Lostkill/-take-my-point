import React, { useState } from 'react'
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

  const { lastPoint } = props
  return (
    <div>
      <HeaderBar
        menu={menu}
        activePoint={lastPoint.type === 'ENTRY' && true}
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
  const { lastPoint } = PointDuck

  return {
    user,
    lastPoint
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUpdate: (userId, payload) => dispatch(loginThunk.update(userId, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
