import React from 'react'
import { StyleSheet } from 'elementum'
import { Layer } from '../layer'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'relative',
    border: 'none',
    borderRadius: '24px',
    padding: '12px 24px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#FFFFFF',
    justifyContent: 'center',
    appearance: 'none',
    width: '327px',
    boxSizing: 'border-box',
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '0',
      height: '0',
      bottom: '-6px',
      right: '30px',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
    },
  },
  'color=orange': {
    backgroundColor: '#FF9600',
    '&:after': {
      borderTop: '7px solid #FF9600',
    },
  },
  'color=red': {
    backgroundColor: '#FF4747',
    '&:after': {
      borderTop: '7px solid #FF4747',
    },
  },
})

const PopUp = ({ children, padding, color }) => (
  <Layer
    align='br-tr'
    offset='18px 0'
  >
    <div className={styles({ padding, color })}>
      {children}
    </div>
  </Layer>
)

export default PopUp
