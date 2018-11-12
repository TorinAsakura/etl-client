import React, { Component, createRef } from 'react'
import { StyleSheet } from 'elementum'
import { ArrowInputIcon } from '../icons'
import { Input } from '../input'
import { Condition } from '../condition'
import Options from './Options'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'inline-flex',
    width: '100%',
    minWidth: '160px',
    height: '48px',
    zIndex: 2,
    '& svg': {
      position: 'absolute',
      top: '22px',
      right: '24px',
      cursor: 'pointer',
    },
    '& input': {
      cursor: 'pointer',
    },
  },
  opened: {
    zIndex: 3,
  },
})

class Select extends Component {
  mySelect = createRef()

  static defaultProps = {
    valueField: 'id',
    displayField: 'name',
    options: [],
  }

  state = {
    opened: false,
  }

  getValue() {
    const { value, displayField, valueField, options } = this.props

    if (typeof value === 'string') {
      const [current] = options.filter(option => option[valueField] === value)

      if (current && current[displayField]) {
        return current[displayField]
      }
    }

    if (value && value[displayField]) {
      return value[displayField]
    }

    return ''
  }

  onChange = (value) => {
    const { onChange, valueField, singleValue } = this.props

    if (singleValue && onChange) {
      onChange(value[valueField])
    } else if (onChange) {
      onChange(value)
    }
  }

  onToggle = () => {
    const { onOpen } = this.props
    const { opened } = this.state

    if (!opened && onOpen) {
      onOpen()
    }

    this.setState({ opened: !opened })
  }

  render() {
    const {
      value,
      placeholder,
      invalid,
      options,
      valueField,
      displayField,
    } = this.props
    const { opened } = this.state

    return (
      <div
        ref={this.mySelect}
        className={styles({ opened })}
        onClick={this.onToggle}
      >
        <Input
          readOnly
          placeholder={placeholder}
          invalid={invalid}
          value={this.getValue()}
        />
        <ArrowInputIcon
          width={8}
        />
        <Condition match={opened}>
          <Options
            options={options}
            valueField={valueField}
            displayField={displayField}
            toggled={opened}
            activeValue={value}
            select={this.mySelect.current}
            onToggle={this.onToggle}
            onSelect={this.onChange}
          />
        </Condition>
      </div>
    )
  }
}

export default Select
