import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '0',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-4px',
      right: '21px',
      zIndex: '-1',
      width: '8px',
      height: '8px',
      display: 'block',
      transform: 'rotate(45deg)',
      boxSizing: 'border-box',
    },
  },
  'width=medium': {
    width: '197px',
  },
  'theme=light': {
    backgroundColor: '#FFF',
    filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.19))',
    '&::before': {
      backgroundColor: '#fff',
      borderRight: 'none',
      borderBottom: 'none',
    },
  },
  rightNegativeAlignment: {
    right: '-4px',
  },
  fromBottom: {
    marginTop: 'auto',
    marginBottom: '10px',
  },
  borderRadius: {
    borderRadius: '4px',
  },
  center: {
    transform: 'translateX(-50%)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 'auto',
      bottom: '-6px',
      marginRight: '-6px',
      right: '50%',
      transform: 'rotate(45deg)',
      border: 'none',
    },
  },
  noPopup: {
    marginTop: '4px',
    '&::before': {
      display: 'none',
    },
  },
})

const Content = ({
  theme = 'light',
  rightNegativeAlignment,
  fromBottom,
  borderRadius,
  center,
  width = 'medium',
  noPopup,
  children,
}) => (
  <ul className={styles({
    theme,
    rightNegativeAlignment,
    noPopup,
    fromBottom,
    borderRadius,
    center,
    width,
  })}
  >
    {children}
  </ul>
)

export default Content
