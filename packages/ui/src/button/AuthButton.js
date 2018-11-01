/* eslint-disable react/button-has-type */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '44px',
    width: '100%',
    borderRadius: '22px',
    border: '0',
    outline: '0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in',
  },
  'color=blue200': {
    backgroundColor: '#009AFF',
    '&:hover': {
      backgroundColor: '#E0F2FF',
    },
    '&:active': {
      backgroundColor: '#9BD8FF',
    },
  },
  'color=blue400': {
    backgroundColor: '#E0F2FF',
    '&:hover': {
      backgroundColor: '#009AFF',
    },
    '&:active': {
      backgroundColor: '#9BD8FF',
    },
  },
  'text=blue200': {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '16px',
    color: '#FFFFFF',
    '&:hover': {
      color: '#009AFF',
    },
    '&:active': {
      color: '#FFFFFF !important',
    },
  },
  'text=blue400': {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '16px',
    color: '#009AFF',
    '&:hover': {
      color: '#FFFFFF',
    },
    '&:active': {
      color: '#FFFFFF !important',
    },
  },
})

const AuthButton = ({
  children,
  onClick,
  color = 'blue200',
  ...props
}) => (
  <button
    {...props}
    className={styles({ color, text: color })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default AuthButton
