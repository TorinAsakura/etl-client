/* eslint-disable react/no-find-dom-node,consistent-return */
import React, { Component } from 'react'
import {
  DragSource,
  DropTarget,
} from 'react-dnd'

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    }
  },
}

const cardTarget = {
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

class Card extends Component {
  render() {
    const {
      children,
      connectDragSource,
      connectDropTarget,
    } = this.props

    return connectDragSource(
      connectDropTarget(
        <div>
          {children}
        </div>,
      ),
    )
  }
}

export default DropTarget(
  'card',
  cardTarget,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(
  DragSource(
    'card',
    cardSource,
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)
