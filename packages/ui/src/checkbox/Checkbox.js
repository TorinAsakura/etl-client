/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import { StyleSheet } from 'elementum'
import { unique } from '@er/utils'
import { CheckIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'relative',
    '& input': {
      display: 'none',
    },
    '& label': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '24px',
      minHeight: '24px',
      color: '#A8A8A8',
      fontFamily: 'Roboto',
      fontSize: '14px',
      lineHeight: '16px',
      cursor: 'pointer',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        border: '1px solid #009AFF',
        borderRadius: '6px',
        outline: 'none',
        width: '24px',
        height: '24px',
        backgroundColor: '#FFFFFF',
        transition: 'box-shadow ease-in .1s',
      },
      '&:hover::before': {
        borderColor: '#009AFF',
        backgroundColor: '#E0F2FF',
      },
    },
    '& svg': {
      position: 'absolute',
      top: '6px',
      left: '7px',
      display: 'none',
    },
    '& input:checked ~ label svg': {
      display: 'block',
    },
  },
  disabled: {
    '& label::before, label:hover::before': {
      borderColor: '#9BD8FF',
    },
  },
  label: {
    '& label': {
      paddingLeft: '12px',
    },
  },
})

const Checkbox = ({
  id = unique(),
  value,
  onChange = f => f,
  disabled,
  children,
  ...props
}) => (
  <div className={styles({ disabled, label: children })}>
    <input
      id={id}
      type='checkbox'
      checked={value}
      onChange={disabled ? null : () => onChange(!value)}
      disabled={disabled}
      {...props}
    />
    <label htmlFor={id}>
      <CheckIcon
        width={13}
        height={14}
      />
      {children}
    </label>
  </div>
)

export default Checkbox
