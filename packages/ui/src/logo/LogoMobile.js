/* eslint-disable max-len */
import React from 'react'

const getSize = (width, height, viewBox, ratio) => {
  if (!width && !height) {
    const sizes = viewBox.split(' ')
    return { width: sizes[2], height: sizes[3] }
  }
  if (width && height) return { width, height }
  return {
    ...width && { width, height: (width / ratio) },
    ...height && { width: (height * ratio), height },
  }
}
const getRatio = (viewBox) => {
  const sizes = viewBox.split(' ')
  return sizes[2] / sizes[3]
}

const gradients = {
  blue: ['#228DCD', '#268DCD', '#668AC6', '#8386C1', '#9183BD', '#9582BC'],
  white: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
}

const Logo = ({
  width = 33,
  height = 44,
  fill = '#000000',
  viewBox = '0 0 33 44',
  color = 'blue',
}) => (
  <svg
    viewBox={viewBox}
    fill={fill}
    {...getSize(width, height, viewBox, getRatio(viewBox))}
  >
    <defs>
      <linearGradient x1='2.03516279%' y1='70.7607155%' x2='97.809814%' y2='-1.46499474%' id='linearGradient-1'>
        <stop stopColor={gradients[color][0]} offset='0%' />
        <stop stopColor={gradients[color][1]} offset='0.8272509%' />
        <stop stopColor={gradients[color][2]} offset='27.89%' />
        <stop stopColor={gradients[color][3]} offset='54.01%' />
        <stop stopColor={gradients[color][4]} offset='78.56%' />
        <stop stopColor={gradients[color][5]} offset='99.95%' />
      </linearGradient>
    </defs>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-142.000000, -11.000000)' fillRule='nonzero'>
        <g>
          <g transform='translate(142.000000, 11.000000)'>
            <g>
              <polygon fill='url(#linearGradient-1)' points='16.5 31.0052613 9.91534884 25.5419151 9.91534884 23.6745002 20.0609302 23.6745002 32.6009302 13.3960014 9.99209302 13.3960014 9.99209302 10.2013329 32.9386047 10.2013329 32.9232558 0 0 0 0 30.4496668 16.4232558 44 33 30.4496668 32.9539535 17.6709926' />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default Logo
