import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '48px',
    boxSizing: 'border-box',
    background: 'transparent',
    boxShadow: 'none',
    border: '1px solid #009AFF',
    borderRadius: '24px',
    padding: '0 24px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#262626',
    appearance: 'none',
    outline: 'none',
    transition: 'all 0.2s ease-in',
    '&:hover': {
      background: '#E0F2FF',
      '&::-webkit-input-placeholder': {
        color: '#444444',
      },
    },
    '&:focus': {
      background: 'transparent',
      borderColor: '#0288d1',
      boxShadow: 'inset 1px 2px 3px 0 rgba(0,0,0,0.1)',
    },
    '&::-webkit-input-placeholder': {
      transition: 'all 0.2s ease-in',
      fontWeight: 300,
      color: '#b9b9b9',
    },
  },
  disabled: {
    opacity: 0.6,
  },
  invalid: {
    borderColor: '#ff0000',
  },
})

const Input = ({
  value,
  disabled,
  invalid,
  onChange,
  onKeyPress,
  onEnter,
  ...props
}) => (
  <input
    {...props}
    value={value}
    disabled={disabled}
    className={styles({ disabled, invalid })}
    onChange={({ target }) => onChange && onChange(target.value)}
    onKeyPress={(event) => {
      if (event.key === 'Enter' && onEnter) {
        onEnter()
      }

      if (onKeyPress) {
        onKeyPress(event)
      }
    }}
  />
)

export default Input
