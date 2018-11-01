import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Table, Column } from 'react-virtualized'
import Base from './Base'
import { Text } from '../text'

const mock = [
  {
    id: '1',
    pair: 'Solidity',
    buy: 'ETH',
    sell: '0.0000500',
    changes: '+0.22%',
  },
  {
    id: '2',
    pair: 'Solidity',
    buy: 'ETH',
    sell: '0.0000100',
    changes: '-0.22%',
  },
  {
    id: '3',
    pair: 'Solidity',
    buy: 'ETH',
    sell: '0.0000100',
    changes: '+0.22%',
  },
]

const styles = StyleSheet.create({
  self: {
    flex: '0 0 auto',
    display: 'flex',
    '& .ReactVirtualized__Table': {
    },
    '& .ReactVirtualized__Table__Grid': {
      outline: 'none',
    },
    '& .ReactVirtualized__Table__headerRow': {
      fontWeight: '700',
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    '& .ReactVirtualized__Table__row': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: '#444444',
      fontSize: '14px',
      fontFamily: 'Roboto',
      lineHeight: '1.2',
    },
    '& .ReactVirtualized__Table__headerTruncatedText': {
      display: 'inline-block',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& .ReactVirtualized__Table__rowColumn': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: '#444444',
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: '13px',
      textTransform: 'none',
      '&:first-of-type': {
        paddingLeft: '10px',
      },
    },
    '& .ReactVirtualized__Table__headerColumn': {
      paddingBottom: '8px',
      minWidth: '0px',
      fontFamily: 'Roboto',
      fontWeight: '500',
      color: '#A8A8A8',
      fontSize: '12px',
      textTransform: 'none',
      borderBottom: '1px solid #E6E6E6',
      '&:first-of-type': {
        paddingLeft: '10px',
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

const ChoosePair = ({
  list = mock,
}) => (
  <Base size='1x2'>
    <Layout>
      <Text
        size='small'
        color='gray444'
        weight='medium'
        uppercase
      >
        My Trading History
      </Text>
    </Layout>
    <Layout basis='16px' />
    <div className={styles()}>
      <Table
        width={343}
        headerHeight={33}
        height={616}
        rowHeight={33}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
      >
        <Column
          label='Date'
          headerRenderer={({ label }) => label}
          dataKey='pair'
          width={76}
          style={{ color: '#8A4DD0' }}
        />
        <Column
          label='Action'
          dataKey='sell'
          width={105}
        />
        <Column
          label='Price'
          dataKey='sell'
          width={105}
        />
        <Column
          label='Amount'
          dataKey='sell'
          width={105}
        />
      </Table>
    </div>
  </Base>
)

export default injectIntl(ChoosePair)
