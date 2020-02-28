import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faUserAlt, faEnvelopeSquare, faLanguage } from '@fortawesome/free-solid-svg-icons'

import ProfileEdit from '../components/profile-edit'

function ProfileView (props) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <ContentWrapper className='container d-flex flex-column justify-content-center align-items-center'>
        <CardWrapper className='d-flex'>
          <CardMedia
            style={{ width: '20%' }}
            image={`${props.user.profile_pic ? props.user.profile_pic : 'https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png'}`}
          />
          <CardContentWrapper>
            {
              props.edit
                ? (
                  <ProfileEdit
                    fieldsValues={props.fieldsValues}
                    setEdit={() => props.setEdit(false)}
                    onHandleChange={props.handleChange}
                    onHandleSubmit={props.handleSubmit}
                  />
                ) : (
                  <div>
                    <div className='d-flex justify-content-end align-items-end'>
                      <IconButton onClick={() => props.setEdit(true)}>
                        <FontAwesomeIcon icon={faPenSquare} size='fa-sm' />
                      </IconButton>
                    </div>
                    <ListItem className='row d-flex flex-column'>
                      <div className='col d-flex align-items-center'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faUserAlt} size='fa-sm' />
                        </ListItemIcon>
                        <ListItemText>
                          Name: {props.user.username}
                        </ListItemText>
                      </div>
                      <div className='col d-flex align-items-center'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faEnvelopeSquare} size='fa-sm' />
                        </ListItemIcon>
                        <ListItemText>
                          E-mail: {props.user.email}
                        </ListItemText>
                      </div>
                      <div className='col d-flex align-items-center'>
                        <ListItemIcon>
                          <FontAwesomeIcon icon={faLanguage} size='fa-sm' />
                        </ListItemIcon>
                        <ListItemText>
                          Language: {props.user.language}
                        </ListItemText>
                      </div>
                    </ListItem>
                  </div>
                )
            }
          </CardContentWrapper>
        </CardWrapper>
      </ContentWrapper>
    </div>
  )
}

export default ProfileView

const ContentWrapper = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
`
const CardWrapper = styled(Card)`
  width: 100%;
`
const CardContentWrapper = styled(CardContent)`
  width: 100%;
`
