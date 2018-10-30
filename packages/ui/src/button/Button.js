/* eslint-disable react/button-has-type */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    justifyContent: 'center',
    height: '24px',
    width: '100%',
    padding: '0',
    alignItems: 'center',
    borderRadius: '4px',
    border: '1px solid #FFA800',
    backgroundColor: '#FFA800',
    boxShadow: '0 2px 4px 0 rgba(255, 168, 0, 0.3)',
    outline: '0',
    transition: '0.2s',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 2px 6px 0 rgba(255, 168, 0, 0.7)',
    },
    '&:active': {
      boxShadow: '0 1px 2px 0 rgba(255, 168, 0, 0.3)',
    },
    '& path': {
      fill: '#FFFFFF',
      transition: '0.2s',
    },
  },
  'height=medium': {
    height: '32px',
  },
  'color=lightGray': {
    backgroundColor: '#8390AD',
    border: '1px solid #8390AD',
    boxShadow: '0 2px 4px 0 rgba(41, 50, 70, 0.1)',
    '&:hover': {
      boxShadow: '0 2px 6px 0 rgba(41, 50, 70, 0.4)',
    },
    '&:active': {
      boxShadow: '0 1px 2px 0 rgba(41, 50, 70, 0.2)',
      color: '#FFA800',
    },
  },
  'text=normal': {
    font: '600 11px SF UI Text',
    lineHeight: '13px',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    '&:active': {
      color: '#293246',
    },
  },
  'text=bold': {
    font: 'bold 12px SF UI Text',
    color: '#FFFFFF',
    lineHeight: '14px',
    textTransform: 'uppercase',
    '&:active': {
      color: '#293246',
    },
  },
  icon: {
    padding: '0 7px',
    '& svg': {
      paddingRight: '5px',
    },
  },
  textTransformNone: {
    textTransform: 'none',
  },
  disabled: {
    cursor: 'default',
    color: '#BFC8DC',
    background: '#ffffff',
    border: '1px solid #BFC8DC',
    boxShadow: '0 2px 10px 0 rgba(0,0,0,0.05), 0 2px 4px 0 rgba(41,50,70,0.1)',
    '&:hover': {
      boxShadow: '0 2px 10px 0 rgba(0,0,0,0.05), 0 2px 4px 0 rgba(41,50,70,0.1)',
    },
  },
})

const Button = ({
  children, props, text, color, height, disabled, textTransformNone, onClick, icon,
}) => (
  <button
    {...props}
    disabled={disabled}
    className={styles({
      text,
      color,
      height,
      textTransformNone,
      icon,
      disabled,
    })}
    onClick={disabled ? null : onClick}
  >
    {children}
  </button>
)

export default Button
