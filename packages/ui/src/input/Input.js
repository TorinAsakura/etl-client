import React from 'react'
import { StyleSheet } from 'elementum'
import { Condition } from '../condition'
import PopUp from './Popup'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    '& input': {
      width: '100%',
      position: 'relative',
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
  error,
  warning,
  ...props
}) => (
  <div
    className={styles({ disabled, invalid })}
  >
    <input
      {...props}
      value={value}
      disabled={disabled}
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
    <Condition match={error || warning}>
      <PopUp
        color={warning ? 'orange' : 'red'}
      >
        {error || warning}
      </PopUp>
    </Condition>

  </div>
)

export default Input
