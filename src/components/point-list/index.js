import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'
import i18n from '../../config/i18n'

import MUIDataTable from 'mui-datatables'

import DialogPoint from './dialog'

function PointList (props) {
  const [columns] = useState([
    `${i18n.translate('table.columns.date')}`,
    `${i18n.translate('table.columns.last_point')}`,
    'Status',
    `${i18n.translate('table.columns.open')}`
  ])

  return (
    <Wrapper className='d-flex justify-content-center align-items-center container'>
      <TableWrapper>
        <MUIDataTable
          title={`${i18n.translate('table.title')}`}
          data={props.points.length > 0 ? props.points.map(item => (
            item ? [
              item._id,
              moment(item.point[item.point.length - 1].date).format('h:mm:ss'),
              item._id === moment().format('DD-MM-YYYY') ? 'inProgress' : 'Done',
              <DialogPoint key={item._id} selected={props.selected} setDateSelected={() => props.setDateSelected(item.point)} user={props.user} />
            ] : []
          )) : []}
          columns={columns}
          options={{
            filterType: 'dropdown',
            responsive: 'scroll',
            selectableRows: 'none',
            textLabels: {
              body: {
                noMatch: `${i18n.translate('table.no_data')}`,
                toolTip: `${i18n.translate('table.sort')}`
              }
            },
            sorting: false
          }}
        />
      </TableWrapper>
    </Wrapper>
  )
}

export default PointList

const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
`
const TableWrapper = styled.div`
  width: 100%;
`
