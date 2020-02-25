import React from 'react'
import Pulse from '../pulse-loading'

import i18n from '../../config/i18n'

function Status (props) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {
        props.status.active
          ? (
            <div className='d-flex'>
              <strong>{i18n.translate('working')}</strong>
              <Pulse greenPulse />
            </div>
          ) : (
            <div className='d-flex'>
              <span>zZZz...</span>
              <Pulse />
            </div>
          )
      }
    </div>
  )
}

export default Status
