import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '14px',
    lineHeight: '15px',
    cursor: 'pointer',
    '& span': {
      flex: '0 0 32px',
    },
    '&:hover': {
      background: '#F5F8FA',
    },
  },
  'color=blue': {
    color: '#009AFF',
  },
  'weight=normal': {
    fontWeight: '400',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
})

const Item = ({
  children,
  color = 'blue',
  hoverColor,
  active,
  disabled,
  topBorder,
  bottomBorder,
  weight = 'normal',
  uppercase,
  lowercase,
  onClick,
}) => (
  <a
    className={styles({
      color,
      hoverColor,
      active,
      disabled,
      topBorder,
      bottomBorder,
      weight,
      uppercase,
      lowercase,
    })}
    onClick={onClick}
  >
    <span />
    {children}
    <span />
  </a>
)

export default Item
