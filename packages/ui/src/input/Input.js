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
    borderRadius: '22px',
    padding: '0 24px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#262626',
    appearance: 'none',
    outline: 'none',
    '&:focus': {
      borderColor: '#0288d1',
    },
    '&::-webkit-input-placeholder': {
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
  ...props
}) => (
  <input
    {...props}
    value={value}
    disabled={disabled}
    className={styles({ disabled, invalid })}
    onChange={({ target }) => onChange && onChange(target.value)}
  />
)

export default Input
