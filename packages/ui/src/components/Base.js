import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    border: 'none',
    width: '100%',
    height: '100%',
    zIndex: '10',
    boxSizing: 'border-box',
    flexDirection: 'column',
    borderRadius: '4px',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.06)',
    padding: '16px',
  },
  mobile: {
    margin: '4px 0',
    overflowX: 'auto',
  },
  isDragging: {
    opacity: '0',
  },
})

const Base = ({
  children,
  mobile,
  isDragging,
  ...props
}) => (
  <div
    className={styles({
      mobile,
      isDragging,
    })}
    {...props}
  >
    {children}
  </div>
)

export default Base
