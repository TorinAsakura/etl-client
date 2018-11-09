import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #E6E6E6',
    borderRadius: '35px',
    boxSizing: 'border-box',
    padding: '6px',
  },
})

const SwitcherToggleContainer = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default SwitcherToggleContainer
