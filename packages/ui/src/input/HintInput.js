/* eslint-disable react/sort-comp */
import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import InputElement from './InputElement'
import Title from './Title'
import Fake from './Fake'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
  },
  rightHint: {
    '& input': {
      paddingRight: '30px',
    },
  },
  leftHint: {
    '& input': {
      paddingLeft: '30px',
    },
  },
})

class HintInput extends Component {
  static defaultProps = {
    size: 'normal',
    rightHint: null,
    leftHint: null,
  }

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  onSetInputRef = (input) => {
    this.input = input
  }

  renderTitle() {
    const { title } = this.props

    if (!title) {
      return null
    }

    return (
      <Title>
        {title}
      </Title>
    )
  }

  render() {
    const {
      disabled,
      rightHint,
      leftHint,
      error,
      color,
      warning,
      value,
      onChange,
      setRef,
      readonly,
      ...props
    } = this.props
    return (
      <div className={styles({ rightHint, leftHint })}>
        {this.renderTitle()}
        <Fake
          disabled={disabled}
          error={error}
          color={color}
          warning={warning}
          empty={!value}
        >

          {leftHint}
          <InputElement
            {...props}
            ref={!setRef ? this.onSetInputRef : setRef}
            disabled={disabled}
            value={value}
            onChange={onChange}
            color={color}
            readonly={readonly}
          />
          {rightHint}
        </Fake>
      </div>
    )
  }
}

export default HintInput
