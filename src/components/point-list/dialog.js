import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

import i18n from '../../config/i18n'

import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import Avatar from '@material-ui/core/Avatar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faClock, faDoorOpen, faDoorClosed, faWindowClose } from '@fortawesome/free-solid-svg-icons'

function PointDialog (props) {
  const [open, setOpen] = useState(false)

  async function setSelected () {
    await props.setDateSelected()
    setOpen(true)
  }

  function totalHour (point) {
    if (point.length <= 0) return null
    var a = moment(point[0].date)
    var b = moment(point[point.length - 1].date)
    console.log('eae')
    return b.diff(a, 'hours')
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
        <HeaderCardWrapper className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <Avatar aria-label='recipe'>
              {props.user.username.charAt(0)}
            </Avatar>
            {`${i18n.translate('totalHour')}: ${totalHour(props.selected)}h`}
          </div>
          <IconButton aria-label='close' onClick={() => setOpen(false)}>
            <FontAwesomeIcon style={{ color: '#6db65b' }} className='fa-sm' icon={faWindowClose} />
          </IconButton>
        </HeaderCardWrapper>
        <CardContentWrapper>
          {
            props.selected
              ? (
                props.selected.map((item) => (
                  <div key={item._id}>
                    <div className='row'>
                      <div className='col d-flex align-items-center'>
                        <PointIcons>
                          {
                            item.type === 'ENTRY'
                              ? (<FontAwesomeIcon icon={faDoorOpen} />)
                              : (<FontAwesomeIcon icon={faDoorClosed} />)
                          }
                        </PointIcons>
                        <div>
                          {item.type}
                        </div>
                      </div>
                      <div className='col d-flex align-items-center'>
                        <PointIcons>
                          <FontAwesomeIcon icon={faClock} />
                        </PointIcons>
                        <div>
                          {moment(item.date).format('DD/MM/YYYY - hh:mm:ss')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <NoContentText>
                  Select a date to show!
                </NoContentText>
              )
          }
        </CardContentWrapper>
      </Dialog>
    </div>
  )
}

export default PointDialog

const HeaderCardWrapper = styled.div`
  margin: 20px;
`
const CardContentWrapper = styled.div`
  overflow: auto;
  background-color: #f9f9f9;
  padding: 20px;
`
const PointIcons = styled.div`
  margin: 5px;
`
const NoContentText = styled.h3`
  color: #cecece;
`
