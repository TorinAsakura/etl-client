import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Column } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import {
  Table,
  Column as TableColumn,
  AutoSizer,
} from 'react-virtualized'
import { Text } from '../text'
import { Button } from '../button'
import messages from './messages'

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

const BuyOrders = ({
  orders,
  intl,
  activeTab,
}) => (
  <Column
    fill
  >
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
      <AutoSizer>
        {({ width, height }) => (

          <Table
            width={width}
            headerHeight={33}
            height={height - 32}
            rowHeight={32}
            rowCount={orders[activeTab].length}
            rowGetter={({ index }) => orders[activeTab][index]}
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
            <TableColumn
              label='Exchange'
              headerRenderer={({ label }) => label}
              dataKey='exchange'
              width={188}
            />
            <TableColumn
              label='Action'
              dataKey={activeTab}
              width={190}
              cellRenderer={({ rowData }) => (
                <Button
                  height='small'
                  text='medium'
                  color={activeTab === 'sell' ? 'green700' : 'orange600'}
                  onClick={() => console.log(rowData)}
                >
                  {activeTab}
                </Button>
              )}
            />
            <TableColumn
              label='BTC'
              dataKey='price'
              width={228}
            />
            <TableColumn
              label='Compare'
              dataKey='amount'
              width={126}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  </Column>
)

export default injectIntl(BuyOrders)
