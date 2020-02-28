import React from 'react'
import styled from 'styled-components'

import PointList from '../components/point-list'

import LinearProgress from '@material-ui/core/LinearProgress'

function HistoryView (props) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <ContentWrapper>
        {
          props.isFetching
            ? (
              <div style={{ width: '100%', height: '100%' }}>
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
  height: 100%;
  width: 100%;
`
