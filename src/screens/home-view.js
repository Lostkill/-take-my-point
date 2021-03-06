import React from 'react'
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import QrPoint from '../components/qr-point'
import ManualPoint from '../components/manual-point'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faHandPointer } from '@fortawesome/free-solid-svg-icons'

function HomeView (props) {
  return (
    <div>
      <ContentWrapper className='d-flex flex-column justify-content-center align-items-center'>
        <div>
          {
            props.wayTakePoint === 'qr'
              ? (
                <QrPoint
                  qr_value={`${props.user._id}.${props.user.username}.${props.user.enterprise_id}`}
                  profile_pic={props.user.profile_pic ? props.user.profile_pic : 'https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png'}
                />
              ) : (
                <ManualPoint
                  profile_pic={props.user.profile_pic}
                  pointType={props.activePoint}
                  setActivePoint={props.setActivePoint}
                />
              )
          }
        </div>
        <div className='d-flex'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => props.setWayTakePoint('manual')}
            style={{ borderRadius: '0px', margin: '5px' }}
          >
            <div>
              <FontAwesomeIcon icon={faHandPointer} />
            </div>
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => props.setWayTakePoint('qr')}
            style={{ borderRadius: '0px', margin: '5px' }}
          >
            <div>
              <FontAwesomeIcon icon={faQrcode} />
            </div>
          </Button>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HomeView

const ContentWrapper = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  bottom: 0;
`
