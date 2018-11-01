import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Table, Column } from 'react-virtualized'
import Base from './Base'
import { Text } from '../text'
import { Button } from '../button'
import messages from './messages'

const mock = [
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'Solidity',
    buy: 'BUY',
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
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
      height: '30px',
      alignItems: 'center',
      color: '#444444',
      fontSize: '14px',
      fontFamily: 'Roboto',
      lineHeight: '1.2',
      margin: '1px 0',
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
  intl,
  activeTab,
}) => (
  <Base>
    <Layout>
      <Text
        size='small'
        color='orange700'
        weight='medium'
        uppercase
      >
        {intl.formatMessage(messages.buyOrders)}
      </Text>
    </Layout>
    <Layout basis='16px' />
    <div className={styles()}>
      <Table
        width={343}
        headerHeight={33}
        height={280}
        rowHeight={32}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
        rowStyle={({ index }) => {
          if (index === 1) {
            return {
              backgroundColor: '#FFE9F1',
              margin: '1px 0',
              height: '30px',
            }
          }
          if (index === 0) {
            return {
              backgroundColor: '#FFF9D1',
              margin: '1px 0',
              height: '30px',
            }
          }
          return {}
        }}
      >
        <Column
          label='Exchange'
          headerRenderer={({ label }) => label}
          dataKey='pair'
          width={85}
        />
        <Column
          label='Action'
          dataKey='buy'
          width={86}
          cellRenderer={({ rowData }) => (
            <Button
              height='small'
              text='medium'
              color={activeTab === 'sell' ? 'green700' : 'orange600'}
              onClick={() => console.log(`Buy ${rowData.id}`)}
            >
              {activeTab}
            </Button>
          )}
        />
        <Column
          label='BTC'
          dataKey='sell'
          width={103}
        />
        <Column
          label='Compare'
          dataKey='changes'
          width={57}
        />
      </Table>
    </div>
  </Base>
)

export default injectIntl(ChoosePair)
