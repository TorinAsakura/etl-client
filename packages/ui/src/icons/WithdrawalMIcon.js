/* eslint-disable max-len */
import React from 'react'
import Icon from './Icon'

const colors = {
  white: '#FFF',
  blue: '#009AFF',
}

const WithdrawalMIcon = ({ width, height, color = 'blue' }) => (
  <Icon
    width={width}
    height={height}
    fill='none'
    viewBox='0 0 8 1'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-461.000000, -413.000000)' fill={colors[color]}>
        <g transform='translate(457.000000, 405.000000)'>
          <path d='M4 8.95183044 4 8 12 8 12 8.95183044 Z' />
        </g>
      </g>
    </g>
  </Icon>
)

export default WithdrawalMIcon
