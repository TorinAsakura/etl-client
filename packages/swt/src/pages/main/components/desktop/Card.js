/* eslint-disable react/no-find-dom-node,consistent-return */
import React from 'react'
import { StyleSheet } from 'elementum'
import {
  DragSource,
  DropTarget,
} from 'react-dnd'

const styles = StyleSheet.create({
  self: {},
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
})

const Card = ({
  children,
  connectDragSource,
  connectDropTarget,
  width,
  height,
}) => connectDragSource(
  connectDropTarget(
    <div
      className={styles({ width, height })}
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

      const dragIndex = monitor.getItem().index
      const hoverIndex = props.index

      if (dragIndex === hoverIndex) {
        return
      }

      props.moveCard(dragIndex, hoverIndex)
    },
  }
  ,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    'card',
    {
      beginDrag(props) {
        return {
          id: props.id,
          index: props.index,
        }
      },
    }
    ,
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)
