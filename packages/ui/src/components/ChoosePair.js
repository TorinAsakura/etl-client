import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Table, Column } from 'react-virtualized'
import Base from './Base'
import { Text } from '../text'
import { Switcher, SwitcherTab } from '../switcher'
import messages from './messages'

const mock = [
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'BTC',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    buy: Math.random().toFixed(8),
    sell: Math.random().toFixed(8),
    changes: `+${Math.random().toFixed(2)}`,
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    buy: Math.random().toFixed(8),
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
  match,
  tab,
  onChangeTab,
  intl,
  mobile,
}) => {
  const data = list.filter(i => i.pair === tab)
  return (
    <Base
      mobile={mobile}
    >
      <Layout>
        <Text
          size='small'
          color='gray444'
          weight='medium'
          uppercase
        >
          {intl.formatMessage(messages.choosePair)}
        </Text>
      </Layout>
      <Layout basis='16px' />
      <Switcher
        star
      >
        <SwitcherTab
          to={match.path}
          exact
          onClick={() => onChangeTab('BTC')}
        >
        BTC
        </SwitcherTab>
        <SwitcherTab
          to={`${match.path}eth`}
          onClick={() => onChangeTab('ETH')}
        >
        ETH
        </SwitcherTab>
      </Switcher>
      <Layout basis='16px' />
      <div className={styles()}>
        <Table
          width={343}
          headerHeight={33}
          height={240}
          rowHeight={33}
          rowCount={data.length}
          rowGetter={({ index }) => data[index]}
        >
          <Column
            label='Pair'
            headerRenderer={({ label }) => label}
            dataKey='pair'
            width={76}
            style={{ color: '#8A4DD0' }}
          />
          <Column
            label='Buy'
            dataKey='buy'
            width={105}
          />
          <Column
            label='Sell'
            dataKey='sell'
            width={105}
          />
          <Column
            label='Changes'
            dataKey='changes'
            width={55}
          />
        </Table>
      </div>
    </Base>
  )
}

export default injectIntl(ChoosePair)
