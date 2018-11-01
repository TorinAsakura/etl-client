import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import MaskedInput from 'react-text-mask'

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
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      appearance: 'none',
    },
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
  'align=dynamic': {
    '&:focus': {
      textAlign: 'center',
    },
  },
  disabled: {
    opacity: 0.6,
  },
})

const InputMask = ({ mask, ...props }) => {
  if (mask) {
    return (
      <MaskedInput
        mask={mask}
        {...props}
      />
    )
  }

  return (
    <input {...props} />
  )
}

class InputElement extends Component {
  onChange = (event) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(event.target.value)
    }
  }

  onKeyPress = (event) => {
    const { onEnter, onKeyPress } = this.props

    if (event.key === 'Enter' && onEnter) {
      onEnter()
    }

    if (onKeyPress) {
      onKeyPress(event)
    }
  }

  onSetRef = (input) => {
    const { setRef } = this.props

    this.input = input

    if (setRef && input) {
      setRef(input)
    }
  }

  blur() {
    this.input.blur()
  }

  focus() {
    this.input.focus()
  }

  render() {
    const {
      disabled,
      value,
      readonly,
      placeholder,
      align,
      ...props
    } = this.props

    return (
      <InputMask
        {...props}
        disabled={disabled}
        value={value}
        readOnly={readonly}
        className={styles({ disabled, align })}
        placeholder={placeholder}
        ref={this.onSetRef}
        onKeyPress={this.onKeyPress}
        onChange={this.onChange}
        autoComplete='off'
      />
    )
  }
}

export default InputElement
