import React from 'react'
import styled from 'styled-components'

import PointList from '../components/point-list'

import LinearProgress from '@material-ui/core/LinearProgress'

function HistoryView (props) {
  return (
    <div>
      <ContentWrapper className='d-flex flex-column justify-content-center align-items-center'>
        {
          props.isFetching
            ? (
              <div style={{ width: '50%', height: '50%' }}>
                <LinearProgress variant='query' />
              </div>
            )
            : (
              <PointList
                points={props.points}
                selected={props.dateSelected}
                setDateSelected={props.setDateSelected}
              />
            )
        }
      </ContentWrapper>
    </div>
  )
}

export default HistoryView

const ContentWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
`
