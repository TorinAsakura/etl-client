import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Row } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Table, Column } from 'react-virtualized'
import Base from './Base'
import { Block } from '../content'
import { Text } from '../text'
import { Button } from '../button'
import { WithdrawalMIcon, DepositMIcon } from '../icons'
import messages from './messages'

const mock = [
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
    amount: Math.random().toFixed(8),
  },
  {
    id: Math.random().toFixed(4),
    pair: 'ETH',
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
      display: 'inline-block',
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
      // marginRight: '10px',
      minWidth: '0px',
      '&:first-of-type': {
        marginLeft: '10px',
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

const Balances = ({
  list = mock,
  intl,
  mobile,
}) => (
  <Base
    mobile={mobile}
  >
    <Layout>
      <Row align='center'>
        <Layout>
          <Text
            size='small'
            color='blue800'
            weight='medium'
            uppercase
          >
            {intl.formatMessage(messages.balances)}
          </Text>
        </Layout>
        <Layout grow={1} />
        <Layout>
          <Text
            size='small'
            color='blue800'
          >
            ~ 0.00200000
          </Text>
        </Layout>
        <Layout basis='3px' />
        <Layout>
          <Text
            size='small'
            color='gray700'
            uppercase
          >
            BTC
          </Text>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='8px' />
    <Layout basis='1px'>
      <Block color='gray900' />
    </Layout>
    <Layout basis='5px' />
    <div className={styles()}>
      <Table
        width={343}
        height={282}
        rowHeight={33}
        rowCount={list.length}
        rowGetter={({ index }) => list[index]}
      >
        <Column
          dataKey='pair'
          width={110}
          style={{ color: '#A8A8A8' }}
        />
        <Column
          dataKey='amount'
          width={190}
        />
        <Column
          dataKey=''
          width={16}
          cellRenderer={({ rowData }) => (
            <Button
              size='small'
              radius='round'
              color='gray700'
              onClick={() => console.log(rowData.id)}
            >
              <WithdrawalMIcon />
            </Button>
          )}
          style={{ marginRight: '4px' }}
        />
        <Column
          dataKey=''
          width={16}
          cellRenderer={({ rowData }) => (
            <Button
              size='small'
              radius='round'
              color='gray700'
              onClick={() => console.log(rowData.id)}
            >
              <DepositMIcon />
            </Button>
          )}
        />
      </Table>
    </div>
  </Base>
)

export default injectIntl(Balances)
