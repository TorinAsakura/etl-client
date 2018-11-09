import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    border: 'none',
    zIndex: '10',
    boxSizing: 'border-box',
    flexDirection: 'column',
  },
  'type=card': {
    borderRadius: '4px',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.06)',
    padding: '16px',
    margin: '8px',
  },
  'size=1x1': {
    width: '375px',
    height: '343px',
  },
  'size=2x1': {
    width: '766px',
    height: '343px',
  },
  'size=1x2': {
    width: '375px',
    height: '702px',
  },
  mobile: {
    margin: '4px 0',
    overflowX: 'auto',
  },
})

const Base = ({
  children,
  size = '1x1',
  type = 'card',
  mobile,
}) => (
  <div
    className={styles({ size, type, mobile })}
  >
    {children}
  </div>
)

export default Base
