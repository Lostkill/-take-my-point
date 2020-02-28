import React from 'react'
import styled from 'styled-components'

import i18n from '../../config/i18n'

import Button from '@material-ui/core/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

function ManualPoint (props) {
  return (
    <ContentWrapper className='d-flex flex-column justify-content-center align-items-center'>
      <img src={`${props.profile_pic ? props.profile_pic : 'https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png'}`} alt='The User' width={100} />
      <div className='d-flex justify-content-center align-items-center'>
        {
          props.pointType === 'EXIT'
            ? (
              <Button
                variant='contained'
                color='primary'
                onClick={() => props.setActivePoint('ENTRY')}
                style={{ borderRadius: '0px', margin: '5px', backgroundColor: 'green', width: '120px' }}
              >
                <div>
                  {i18n.translate('point-types.entry')}
                  <FontAwesomeIcon icon={faPlay} style={{ margin: '0px 5px' }} />
                </div>
              </Button>
            ) : (
              <Button
                variant='contained'
                color='primary'
                onClick={() => props.setActivePoint('EXIT')}
                style={{ borderRadius: '0px', margin: '5px', backgroundColor: 'red', width: '120px' }}
              >
                <div>
                  {i18n.translate('point-types.exit')}
                  <FontAwesomeIcon icon={faStop} style={{ margin: '0px 5px' }} />
                </div>
              </Button>
            )
        }
      </div>
    </ContentWrapper>
  )
}

export default ManualPoint

const ContentWrapper = styled.div`
  background-color: #f1efef;
  margin: 20px;
  padding: 100px;
`
