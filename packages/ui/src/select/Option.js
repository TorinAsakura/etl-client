import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    padding: '0 0 0 24px',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1.2',
    color: '#E6E6E6',
    height: '48px',
    fontWeight: '400',
    cursor: 'pointer',
    transition: 'all ease-in .1s',
    '&:hover': {
      backgroundColor: '#F4F4F4',
      color: '#444444',
    },
    '& svg': {
      marginRight: '8px',
    },
  },
  isActive: {
    backgroundColor: '#F5F8FA',
    color: '#4D5A78',
  },
})

const Option = ({ data, displayField, onSelect, activeValue }) => (
  <div
    className={styles({ isActive: data[displayField] === activeValue })}
    onClick={() => onSelect(data)}
  >
    {data[displayField]}
  </div>
)

export default Option
