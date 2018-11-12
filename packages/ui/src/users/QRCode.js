import React from 'react'
import { QRCode as Qrcode } from 'react-qr-svg'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    border: '1px solid #9BD8FF',
    borderRadius: '4px',
    width: '200px',
    height: '200px',
    '& svg': {
      width: '184px',
      margin: '8px',
    },
  },
})

const QRCode = ({ value }) => (
  <div
    className={styles()}
  >
    <Qrcode
      value={value}
    />
  </div>
)

export default QRCode
