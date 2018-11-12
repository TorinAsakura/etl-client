import React from 'react'
import { StyleSheet } from 'elementum'
import { Table } from 'react-virtualized'

const styles = StyleSheet.create({
  self: {
    flex: '0 0 auto',
    display: 'flex',
    '& .ReactVirtualized__Table': {
      color: '#444444',
      fontSize: '12px',
      fontFamily: 'Roboto',
      lineHeight: '1.2',
      border: '1px solid #9BD8FF',
      borderRadius: '4px',
    },
    '& .ReactVirtualized__Table__Grid': {
      outline: 'none',
    },
    '& .ReactVirtualized__Table__headerRow': {
      fontWeight: '500',
      color: '#A8A8A8',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingBottom: '10px',
      borderBottom: '1px solid #9BD8FF',
    },
    '& .ReactVirtualized__Table__row': {
      display: 'flex',
      flexDirection: 'row',
      fontSize: '13px',
      alignItems: 'center',
    },
    '& .ReactVirtualized__Table__headerTruncatedText': {
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& .ReactVirtualized__Table__rowColumn': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '& .ReactVirtualized__Table__headerColumn, .ReactVirtualized__Table__rowColumn': {
      minWidth: '0px',
      '&:first-of-type': {
        marginLeft: '20px',
      },
    },
    '& .ReactVirtualized__Table__sortableHeaderColumn': {
      cursor: 'pointer',
    },
    '& .ReactVirtualized__Table__sortableHeaderIconContainer': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .ReactVirtualized__Table__sortableHeaderIcon': {
      flex: '0 0 24px',
      height: '1em',
      width: '1em',
      fill: 'currentColor',
    },
    '& .ReactVirtualized__List': {
    },
  },
})

const VirtualizedTable = ({
  children,
  rowCount,
  rowGetter,
  width,
  height,
  rowHeight = 33,
  ...props
}) => (
  <div
    className={styles()}
  >
    <Table
      width={width}
      height={height}
      rowHeight={rowHeight}
      rowCount={rowCount}
      rowGetter={rowGetter}
      {...props}
    >
      {children}
    </Table>
  </div>
)

export default VirtualizedTable
