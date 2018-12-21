import React from 'react'
import { StyleSheet } from 'elementum'
import { Condition } from '../condition'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexShrink: '0',
    height: '24px',
    minWidth: '24px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    zIndex: 2,
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
})

const Hint = ({
  align,
  size,
  children,
}) => (
  <Condition match={children}>
    <span className={styles({ align, size })}>
      {children}
    </span>
  </Condition>
)

export default Hint
