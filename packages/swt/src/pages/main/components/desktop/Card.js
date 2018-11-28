/* eslint-disable react/no-find-dom-node,consistent-return */
import React from 'react'
import { StyleSheet } from 'elementum'
import {
  DragSource,
  DropTarget,
} from 'react-dnd'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
  },
  'height=1': {
    gridRow: 'auto',
  },
  'height=2': {
    gridRowEnd: 'span 2',
  },
  'width=1': {
    gridColumn: 'auto',
  },
  'width=2': {
    gridColumnEnd: 'span 2',
  },
  isDragging: {
    opacity: '0',
  },
})

const Card = ({
  children,
  connectDragSource,
  connectDropTarget,
  isDragging,
  width,
  height,
  x,
  y,
}) => connectDragSource(
  connectDropTarget(
    <div
      className={styles({ width, height, isDragging })}
      style={{ gridRowStart: y, gridColumnStart: x }}
    >
      {children}
    </div>,
  ),
)

export default DropTarget(
  'card',
  {
    drop(props, monitor, component) {
      if (!component) {
        return null
      }

      const dragItem = monitor.getItem()
      const hoverItem = props

      if (dragItem.index === hoverItem.index) {
        return
      }

      props.moveCard(dragItem, hoverItem)
    },
  },
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    'card',
    {
      beginDrag(props) {
        return {
          index: props.index,
          id: props.id,
          width: props.width,
          height: props.height,
          x: props.x,
          y: props.y,
        }
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)
