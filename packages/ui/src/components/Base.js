import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.06)',
    padding: '16px',
    zIndex: '10',
    boxSizing: 'border-box',
    margin: '8px',
    flexDirection: 'column',
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
})

const Base = ({
  children,
  size = '1x1',
}) => (
  <div
    className={styles({ size })}
  >
    {children}
  </div>
)

export default Base
