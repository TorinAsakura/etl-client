/* eslint-disable consistent-return */
import React from 'react'
import { StyleSheet } from 'elementum'
import {
  DragSource,
  DropTarget,
} from 'react-dnd'
import {
  ClosedModalIcon,
  EditHorizontalIcon,
  EditMoveIcon,
  EditVerticalIcon,
} from '@er/ui/src/icons'
import { Edit } from '@er/ui/src/components'
import { Condition } from '@er/ui/src/condition'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'relative',
    border: 'none',
    width: '100%',
    height: '100%',
    zIndex: '10',
    boxSizing: 'border-box',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.06)',
    padding: '16px',
    '& .edit-interface': {
      '& > div:nth-child(1)': {
        top: '4px',
        left: '4px',
      },
      '& div:nth-child(2)': {
        top: '4px',
        left: '40px',
      },
      '& div:nth-child(3) div': {
        top: 'calc(50% - 16px)',
        left: 'calc(50% - 16px)',
      },
      '& div:nth-child(4)': {
        top: '4px',
        right: '4px',
      },
    },
  },
  'dimensions=width': {
    '& .edit-interface': {
      '& > div:nth-child(1)': {
        top: '4px',
        left: '4px',
      },
      '& div:nth-child(2)': {
        display: 'none',
      },
      '& div:nth-child(3) div': {
        top: 'calc(50% - 16px)',
        left: 'calc(50% - 16px)',
      },
      '& div:nth-child(4)': {
        top: '4px',
        right: '4px',
      },
    },
  },
  'dimensions=height': {
    '& .edit-interface': {
      '& > div:nth-child(1)': {
        display: 'none',
      },
      '& div:nth-child(2)': {
        top: '4px',
        left: '4px',
      },
      '& div:nth-child(3) div': {
        top: 'calc(50% - 16px)',
        left: 'calc(50% - 16px)',
      },
      '& div:nth-child(4)': {
        top: '4px',
        right: '4px',
      },
    },
  },
  'dimensions=none': {
    '& .edit-interface': {
      '& > div:nth-child(1)': {
        display: 'none',
      },
      '& div:nth-child(2)': {
        display: 'none',
      },
      '& div:nth-child(3) div': {
        top: 'calc(50% - 16px)',
        left: 'calc(50% - 16px)',
      },
      '& div:nth-child(4)': {
        top: '4px',
        right: '4px',
      },
    },
  },
  'height=1': {
    gridRow: 'auto',
    height: '343px',
  },
  'height=2': {
    gridRowEnd: 'span 2',
    height: '702px',
  },
  'width=1': {
    gridColumn: 'auto',
    width: '375px',
  },
  'width=2': {
    gridColumnEnd: 'span 2',
    width: '766px',
  },
  isDragging: {
    opacity: '0',
  },
  isHovered: {
    backgroundColor: 'rgba(0, 154, 255, 0.28)',
  },
  mobile: {
    margin: '4px 0',
    overflowX: 'auto',
  },
})

const Card = ({
  children,
  connectDragSource,
  connectDragPreview,
  connectDropTarget,
  isDragging,
  isHovered,
  edit,
  onChangeWidth,
  onChangeHeight,
  width,
  height,
  id,
  dimensions,
}) => connectDragPreview(
  connectDropTarget(
    <div
      className={styles({
        width: width.toString(),
        height: height.toString(),
        isDragging,
        isHovered,
        dimensions,
      })}
    >
      {children}
      <Condition match={edit}>
        <div className='edit-interface'>
          <Edit
            active={width === 2}
            onClick={() => onChangeWidth(width, id)}
          >
            <EditHorizontalIcon />
          </Edit>
          <Edit
            active={height === 2}
            onClick={() => onChangeHeight(height, id)}
          >
            <EditVerticalIcon />
          </Edit>
          {connectDragSource(
            <div>
              <Edit>
                <EditMoveIcon />
              </Edit>
            </div>,
          )}
          <Condition>
            <Edit>
              <ClosedModalIcon />
            </Edit>
          </Condition>
        </div>
      </Condition>
    </div>,
  ),
  {
    anchorX: 0,
    anchorY: 0,
  },
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

      if (dragIndex !== hoverIndex) {
        props.moveCard(dragIndex, hoverIndex)
      }
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isHovered: monitor.isOver(),
  }),
)(
  DragSource(
    'card',
    {
      beginDrag(props) {
        return {
          id: props.id,
          index: props.index,
          width: props.width,
          height: props.height,
          x: props.x,
          y: props.y,
        }
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)
