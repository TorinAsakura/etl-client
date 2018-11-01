/* eslint-disable react/button-has-type */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    justifyContent: 'center',
    height: '24px',
    alignItems: 'center',
    padding: '0',
    boxSizing: 'border-box',
    borderRadius: '20px',
    border: 'none',
    outline: '0',
    transition: 'all ease-in 0.2s',
    cursor: 'pointer',
  },
  fill: {
    width: '100%',
  },
  'height=medium': {
    height: '32px',
  },
  'height=small': {
    height: '22px',
    padding: '0 9px',
  },
  'size=small': {
    height: '16px',
    width: '16px',
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
  'color=gray700': {
    backgroundColor: '#E0F2FF',
    border: '1px solid #E0F2FF',
    '&:hover': {
      backgroundColor: '#009AFF',
      borderColor: '#009AFF',
      '& path': {
        fill: '#FFF',
        transition: 'all ease-in 0.2s',
      },
    },
    '&:active': {
      backgroundColor: '#9BD8FF',
      borderColor: '#9BD8FF !important',
      '& path': {
        fill: '#FFF',
        transition: 'all ease-in 0.2s',
      },
    },
  },
  'color=green700': {
    backgroundColor: '#52BD00',
    border: '2px solid #52BD00',
    '&:hover': {
      backgroundColor: '#FFF',
      color: '#52BD00',
    },
    '&:active': {
      backgroundColor: '#52BD00',
    },
  },
  'color=orange600': {
    backgroundColor: '#FFA800',
    border: '2px solid #FFA800',
    '&:hover': {
      backgroundColor: '#FFF',
      color: '#FFA800',
    },
    '&:active': {
      backgroundColor: '#FFA800',
    },
  },
  'text=normal': {
    font: '400 14px Roboto',
    lineHeight: 1.2,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    '&:active': {
      color: '#293246',
    },
  },
  'text=medium': {
    font: '500 14px Roboto',
    color: '#FFFFFF',
    lineHeight: '14px',
    textTransform: 'uppercase',
    '&:active': {
      color: '#293246',
    },
  },
  'radius=round': {
    borderRadius: '50%',
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
  children,
  text = 'normal',
  color = 'orange600',
  height,
  disabled,
  textTransformNone,
  onClick,
  icon,
  size,
  radius,
  fill,
  ...props
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
      size,
      radius,
      fill,
    })}
    onClick={disabled ? null : onClick}
  >
    {children}
  </button>
)

export default Button
