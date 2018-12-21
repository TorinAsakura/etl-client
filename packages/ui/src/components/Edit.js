import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    height: '32px',
    width: '32px',
    background: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.32)',
    },
    '&:active': {
      background: 'rgba(0, 154, 255, 0.4)',
    },
  },
  active: {
    background: 'rgba(0, 154, 255, 0.4)',
  },
})

const Edit = ({
  children,
  active,
  onClick,
}) => (
  <div
    className={styles({ active })}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Edit
