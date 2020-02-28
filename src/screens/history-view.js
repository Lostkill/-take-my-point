import React from 'react'
import styled from 'styled-components'

import PointList from '../components/point-list'

import LinearProgress from '@material-ui/core/LinearProgress'

function HistoryView (props) {
  return (
    <div>
      <ContentWrapper className='container-fluid d-flex justify-content-center align-items-center'>
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
                user={props.user}
              />
            )
        }
      </ContentWrapper>
    </div>
  )
}

export default HistoryView

const ContentWrapper = styled.div`
  overflow: auto;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
`
