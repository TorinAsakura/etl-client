import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  'overflow=auto': {
    overflow: 'auto',
  },
  'overflow=hidden': {
    overflow: 'hidden',
  },
  'overflowX=auto': {
    overflowX: 'auto',
  },
  'overflowX=hidden': {
    overflowX: 'hidden',
  },
  'overflowY=auto': {
    overflowY: 'auto',
  },
  'overflowY=hidden': {
    overflowY: 'hidden',
  },
})

const CustomRow = ({
  children,
  overflow,
  overflowX,
  overflowY,
}) => (
  <div
    className={styles({
      overflow,
      overflowX,
      overflowY,
    })}
  >
    {children}
  </div>
)

export default CustomRow
