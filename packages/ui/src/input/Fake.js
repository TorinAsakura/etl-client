import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '48px',
    boxSizing: 'border-box',
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    appearance: 'none',
    outline: 'none',
  },
  disabled: {
    opacity: 0.6,
  },
})

const Fake = ({
  disabled,
  children,
}) => (
  <div
    className={styles({ disabled })}
    tabIndex='-1'
  >
    {children}
  </div>
)

export default Fake
