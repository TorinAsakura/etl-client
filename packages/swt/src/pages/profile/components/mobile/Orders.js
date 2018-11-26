import React from 'react'
import { injectIntl } from 'react-intl'
import { AutoSizer, Column as TableColumn } from 'react-virtualized'
import { Layout, Row, Column } from 'flex-layouts'
import { CustomRow } from '@er/ui/src/flex-layouts'
import { Text } from '@er/ui/src/text'
import { VirtualizedTable } from '@er/ui/src/table'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const Orders = ({
  intl,
  openOrders,
  tradeHistory,
}) => (
  <Row>
    <Layout basis='16px' />
    <Layout basis='calc(100% - 32px)'>
      <Column>
        <Layout basis='48px' />
        <Layout justify='center'>
          <Text
            size='xxxlarge'
            color='gray444'
            weight='light'
          >
            {intl.formatMessage(messages.orders)}
          </Text>
        </Layout>
        <Layout basis='40px' />
        <Layout justify='center'>
          <Text
            color='gray444'
            weight='medium'
            uppercase
          >
            {intl.formatMessage(messages.openOrders)}
          </Text>
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <CustomRow overflowX='auto'>
            <Layout>
              <AutoSizer disableHeight>
                {() => (
                  <VirtualizedTable
                    width={850}
                    height={271}
                    rowCount={openOrders.length}
                    rowGetter={({ index }) => openOrders[index]}
                    headerHeight={33}
                  >
                    <TableColumn
                      dataKey='date'
                      label={intl.formatMessage(messages.date)}
                      headerRenderer={({ label }) => label}
                      width={130}
                    />
                    <TableColumn
                      dataKey='pair'
                      label={intl.formatMessage(messages.pair)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='type'
                      label={intl.formatMessage(messages.type)}
                      headerRenderer={({ label }) => label}
                      width={80}
                      cellRenderer={({ cellData }) => (
                        <Text
                          size='small'
                          color={cellData === 'buy' ? 'orange700' : 'green200'}
                          uppercase
                        >
                          {intl.formatMessage(messages[cellData])}
                        </Text>
                      )}
                    />
                    <TableColumn
                      dataKey='amount'
                      label={intl.formatMessage(messages.amount)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='price'
                      label={intl.formatMessage(messages.price)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='fee'
                      label={intl.formatMessage(messages.fee)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='completed'
                      label={intl.formatMessage(messages.completed)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='total'
                      label={intl.formatMessage(messages.total)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey=''
                      label={intl.formatMessage(messages.action)}
                      headerRenderer={({ label }) => label}
                      cellRenderer={({ rowIndex }) => (
                        <Row>
                          <Layout basis='75px'>
                            <AuthButton
                              height='medium'
                              color='blue400'
                              uppercase
                              onClick={() => console.log('cancel', rowIndex)}
                            >
                              {intl.formatMessage(messages.cancel)}
                            </AuthButton>
                          </Layout>
                        </Row>
                      )}
                      width={100}
                    />
                  </VirtualizedTable>
                )}
              </AutoSizer>
            </Layout>
          </CustomRow>
        </Layout>
        <Layout basis='48px' />
        <Layout justify='center'>
          <Text
            color='gray444'
            weight='medium'
            uppercase
          >
            {intl.formatMessage(messages.tradeHistory)}
          </Text>
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <CustomRow overflowX='auto'>
            <Layout>
              <AutoSizer disableHeight>
                {() => (
                  <VirtualizedTable
                    width={800}
                    height={271}
                    rowCount={tradeHistory.length}
                    rowGetter={({ index }) => tradeHistory[index]}
                    headerHeight={33}
                  >
                    <TableColumn
                      dataKey='date'
                      label={intl.formatMessage(messages.date)}
                      headerRenderer={({ label }) => label}
                      width={150}
                    />
                    <TableColumn
                      dataKey='pair'
                      label={intl.formatMessage(messages.pair)}
                      headerRenderer={({ label }) => label}
                      width={110}
                    />
                    <TableColumn
                      dataKey='type'
                      label={intl.formatMessage(messages.type)}
                      headerRenderer={({ label }) => label}
                      width={80}
                      cellRenderer={({ cellData }) => (
                        <Text
                          size='small'
                          color={cellData === 'buy' ? 'orange700' : 'green200'}
                          uppercase
                        >
                          {intl.formatMessage(messages[cellData])}
                        </Text>
                      )}
                    />
                    <TableColumn
                      dataKey='amount'
                      label={intl.formatMessage(messages.amount)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='price'
                      label={intl.formatMessage(messages.price)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='fee'
                      label={intl.formatMessage(messages.fee)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='completed'
                      label={intl.formatMessage(messages.completed)}
                      headerRenderer={({ label }) => label}
                      width={120}
                    />
                    <TableColumn
                      dataKey='total'
                      label={intl.formatMessage(messages.total)}
                      headerRenderer={({ label }) => label}
                      width={100}
                    />
                  </VirtualizedTable>
                )}
              </AutoSizer>
            </Layout>
          </CustomRow>
        </Layout>
      </Column>
    </Layout>
  </Row>
)

export default injectIntl(Orders)
