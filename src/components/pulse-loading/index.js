import React from 'react'
import './pulse.css'

function PulseLoading (props) {
  return (
    <div className='blobs-container'>
      {
        props.greenPulse
          ? (<div className='blob green' />)
          : (<div className='blob red' />)
      }
    </div>
  )
}

export default PulseLoading
