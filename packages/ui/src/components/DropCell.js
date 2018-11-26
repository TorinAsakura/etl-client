/* eslint-disable */
import React from 'react'
import { StyleSheet } from 'elementum'
import { DropTarget } from 'react-dnd'
import { itemType, move } from './utils/dnd'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    margin: '8px',
    background: '#E6E6E6',
    borderRadius: '4px',
  },
  'size=1x1': {
    width: '375px',
    height: '343px',
  },
  'size=2x1': {
    width: '766px',
    height: '343px',
  },
  'size=1x2': {
    width: '375px',
    height: '702px',
  },
})

const DropCell = ({
  children,
  connectDropTarget,
  size = '1x1',
  i,
}) => {
  const x = i % 3
  const y = Math.floor(i)

  return connectDropTarget(
    <div
      key={i}
      className={styles({
        size,
      })}
    >
      {children}
    </div>
  )
}

export default DropTarget(
  itemType,
  {
    drop(props) {
      console.log('spec',props)
      move(props.x, props.y)
    }
  },
  (connect) => ({
    connectDropTarget: connect.dropTarget()
  }),
)(DropCell)
