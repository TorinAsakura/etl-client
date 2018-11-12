/* eslint-disable react/button-has-type */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '22px',
    padding: '0',
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
  'fontSize=large': {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '16px',
  },
  'fontSize=medium': {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '14px',
  },
  'text=blue200': {
    color: '#FFFFFF',
    '&:hover': {
      color: '#009AFF',
    },
    '&:active': {
      color: '#FFFFFF !important',
    },
  },
  'text=blue400': {
    color: '#009AFF',
    '&:hover': {
      color: '#FFFFFF',
    },
    '&:active': {
      color: '#FFFFFF !important',
    },
  },
  'height=large': {
    height: '44px',
  },
  'height=medium': {
    height: '22px',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
})

const AuthButton = ({
  children,
  onClick,
  color = 'blue200',
  uppercase,
  height = 'large',
  ...props
}) => (
  <button
    {...props}
    className={styles({
      color,
      text: color,
      uppercase,
      height,
      fontSize: height,
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default AuthButton
