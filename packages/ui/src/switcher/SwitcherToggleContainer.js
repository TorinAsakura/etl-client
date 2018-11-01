import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    backgroundColor: '#FFF',
    flex: '0 0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #E6E6E6',
    width: 'auto',
    height: '52px',
    borderRadius: '35px',
    padding: '2px',
  },
})

const SwitcherToggleContainer = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default SwitcherToggleContainer
