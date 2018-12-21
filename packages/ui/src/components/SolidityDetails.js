import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Column } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Table, Column as TableColumn, AutoSizer } from 'react-virtualized'
import { Text } from '../text'
import messages from './messages'

const mock = [
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
  {
    id: Math.random().toFixed(4),
    exchange: 'Binance',
    action: 'SELL',
    amount: Math.random().toFixed(8),
    price: Math.random().toFixed(8),
    volume: Math.random().toFixed(8),
    fee: `${Math.random().toFixed(2)}%`,
  },
]

const styles = StyleSheet.create({
  self: {
    flex: '0 0 100%',
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
  <Column
    fill
  >
    <Layout>
      <Text
        size='small'
        color='green700'
        weight='medium'
        uppercase
      >
        {intl.formatMessage(messages.solidityDetails)}
      </Text>
    </Layout>
    <Layout basis='16px' />
    <div className={styles()}>
      <AutoSizer>
        {({ width, height }) => (
          <Table
            width={width}
            headerHeight={33}
            height={height - 32}
            rowHeight={33}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            <TableColumn
              label='Exchange'
              headerRenderer={({ label }) => label}
              dataKey='exchange'
              width={116}
            />
            <TableColumn
              label='Action'
              dataKey='action'
              width={100}
              style={{ color: '#FF8500' }}
            />
            <TableColumn
              label='Amount'
              dataKey='amount'
              width={156}
            />
            <TableColumn
              label='Price'
              dataKey='price'
              width={160}
            />
            <TableColumn
              label='Volume'
              dataKey='volume'
              width={157}
            />
            <TableColumn
              label='Fee'
              dataKey='fee'
              width={44}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  </Column>
)

export default injectIntl(ChoosePair)
