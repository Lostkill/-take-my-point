import React from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

function QrPoint (props) {
  return (
    <ContentWrapper>
      <QRCode
        imageSettings={{
          width: 100,
          height: 100,
          src: `${props.profile_pic}`,
          excavate: true
        }}
        value={`${props.qr_value}`}
        level='H'
        size={260}
      />
    </ContentWrapper>
  )
}

export default QrPoint

const ContentWrapper = styled.div`
  margin: 20px
`
