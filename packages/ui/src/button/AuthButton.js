/* eslint-disable react/button-has-type */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '44px',
    width: '100%',
    borderRadius: '22px',
    backgroundColor: '#009AFF',
    border: '0',
    outline: '0',
  },
})

const AuthButton = ({ children, props, onClick }) => (
  <button {...props} className={styles()} onClick={onClick}>
    {children}
  </button>
)

export default AuthButton
