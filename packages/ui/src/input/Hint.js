import React from 'react'
import { StyleSheet } from 'elementum'
import { Condition } from '../condition'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    flexShrink: '0',
    height: '24px',
    minWidth: '24px',
    borderRadius: '4px',
    backgroundColor: '#e3e7f0',
    boxSizing: 'border-box',
    zIndex: 6,
    pointerEvents: 'none',
  },
  'align=left': {
    left: '24px',
  },
  'align=right': {
    right: '24px',
  },
  'size=small': {
    minWidth: 'auto',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
})

const Hint = ({ align, size, transparent, children }) => (
  <Condition match={children}>
    <span className={styles({ align, size, transparent })}>
      {children}
    </span>
  </Condition>
)

export default Hint
