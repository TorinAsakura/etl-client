import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Table, Column } from 'react-virtualized'
import Base from './Base'
import { Text } from '../text'
import messages from './messages'

const mock = [
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    date: '22:45 27.10.18',
    action: 'SELL',
    price: Math.random().toFixed(8),
    amount: Math.random().toFixed(8),
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
        paddingLeft: '1px',
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
        paddingLeft: '1px',
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
  intl,
}) => (
  <Base size='1x2'>
    <Layout>
      <Text
        size='small'
        color='blue800'
        weight='medium'
        uppercase
      >
        {intl.formatMessage(messages.tradingHistory)}
      </Text>
    </Layout>
    <Layout basis='16px' />
    <div className={styles()}>
      <Table
        width={343}
        headerHeight={33}
        height={637}
        rowHeight={33}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
      >
        <Column
          label='Date'
          headerRenderer={({ label }) => label}
          dataKey='date'
          width={123}
        />
        <Column
          label='Action'
          dataKey='action'
          width={64}
          style={{ color: '#FF8500' }}
        />
        <Column
          label='Price'
          dataKey='price'
          width={86}
        />
        <Column
          label='Amount'
          dataKey='amount'
          width={70}
        />
      </Table>
    </div>
  </Base>
)

export default injectIntl(ChoosePair)
