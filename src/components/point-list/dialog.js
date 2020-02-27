import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faClock, faDoorOpen, faDoorClosed, faWindowClose } from '@fortawesome/free-solid-svg-icons'

function PointDialog (props) {
  const [open, setOpen] = useState(false)

  async function setSelected () {
    await props.setDateSelected()
    setOpen(true)
  }

  return (
    <div>
      <IconButton color='primary' onClick={() => setSelected()}>
        <FontAwesomeIcon style={{ color: '#6db65b' }} className='fa-sm' icon={faPlusCircle} />
      </IconButton>

      <Dialog
        open={open}
        maxWidth='md'
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <CardWrapper>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe'>
                P
              </Avatar>
            }
            action={
              <IconButton aria-label='close' onClick={() => setOpen(false)}>
                <FontAwesomeIcon style={{ color: '#6db65b' }} className='fa-sm' icon={faWindowClose} />
              </IconButton>
            }
            title='~ eae'
            subheader='September'
          />
          <CardContentWrapper>
            {
              props.selected
                ? (
                  props.selected.map((item) => (
                    <div key={item.date} className='d-flex'>
                      <ListItem className='row'>
                        <div className='col d-flex align-items-center'>
                          <ListItemIcon>
                            {
                              item.type === 'ENTRY'
                                ? (<FontAwesomeIcon icon={faDoorOpen} />)
                                : (<FontAwesomeIcon icon={faDoorClosed} />)
                            }
                          </ListItemIcon>
                          <ListItemText>
                            {item.type}
                          </ListItemText>
                        </div>
                        <div className='col d-flex align-items-center'>
                          <ListItemIcon>
                            <FontAwesomeIcon icon={faClock} />
                          </ListItemIcon>
                          <ListItemText>
                            {moment(item.date).format()}
                          </ListItemText>
                        </div>
                      </ListItem>
                    </div>
                  ))
                ) : (
                  <NoContentText>
                    Select a date to show!
                  </NoContentText>
                )
            }
          </CardContentWrapper>
        </CardWrapper>
      </Dialog>
    </div>
  )
}

export default PointDialog

const CardWrapper = styled(Card)`
  padding: 20px;
  width: 100%;
  height: 100%;
  min-height: 500px;
  border-radius: 0;
`
const CardContentWrapper = styled(CardContent)`
  overflow: auto;
  height: 80%;
  background-color: #f9f9f9;
`
const NoContentText = styled.h3`
  color: #cecece;
`
