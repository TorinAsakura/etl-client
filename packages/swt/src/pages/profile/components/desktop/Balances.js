import React from 'react'
import { injectIntl } from 'react-intl'
import { AutoSizer, Column as TableColumn } from 'react-virtualized'
import { Layout, Row, Column } from 'flex-layouts'
import { Text } from '@er/ui/src/text'
import { VirtualizedTable } from '@er/ui/src/table'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const Balances = ({
  intl,
  balance,
  history,
}) => (
  <Column>
    <Layout basis='48px' />
    <Layout>
      <Text
        size='xxxlarge'
        color='gray444'
        weight='light'
      >
        {intl.formatMessage(messages.balances)}
      </Text>
    </Layout>
    <Layout basis='40px' />
    <Layout>
      <Row align='center'>
        <Layout>
          <Text
            size='small'
            color='gray444'
          >
            {intl.formatMessage(messages.totalBalance)}
          </Text>
        </Layout>
        <Layout basis='5px' />
        <Layout>
          <Text
            size='small'
            color='blue800'
            uppercase
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
    <Layout basis='16px' />
    <Layout>
      <AutoSizer disableHeight>
        {({ width }) => (
          <VirtualizedTable
            width={width}
            height={271}
            rowCount={balance.length}
            rowGetter={({ index }) => balance[index]}
            headerHeight={33}
          >
            <TableColumn
              dataKey='coin'
              label={intl.formatMessage(messages.coin)}
              headerRenderer={({ label }) => label}
              width={150}
            />
            <TableColumn
              dataKey='balance'
              label={intl.formatMessage(messages.balance)}
              headerRenderer={({ label }) => label}
              width={200}
            />
            <TableColumn
              dataKey='inOrder'
              label={intl.formatMessage(messages.inOrder)}
              headerRenderer={({ label }) => label}
              width={200}
            />
            <TableColumn
              dataKey='btcValue'
              label={intl.formatMessage(messages.btcValue)}
              headerRenderer={({ label }) => label}
              width={200}
            />
            <TableColumn
              dataKey=''
              label={intl.formatMessage(messages.action)}
              headerRenderer={({ label }) => label}
              cellRenderer={({ rowIndex }) => (
                <Row>
                  <Layout basis='83px'>
                    <AuthButton
                      height='medium'
                      color='blue400'
                      uppercase
                      onClick={() => console.log('deposit', rowIndex)}
                    >
                      {intl.formatMessage(messages.deposit)}
                    </AuthButton>
                  </Layout>
                  <Layout basis='8px' />
                  <Layout basis='115px'>
                    <AuthButton
                      height='medium'
                      color='blue400'
                      uppercase
                      onClick={() => console.log('withdrawal', rowIndex)}
                    >
                      {intl.formatMessage(messages.withdrawal)}
                    </AuthButton>
                  </Layout>
                </Row>
              )}
              width={250}
            />
          </VirtualizedTable>
        )}
      </AutoSizer>
    </Layout>
    <Layout basis='48px' />
    <Layout>
      <Text
        color='gray444'
        weight='medium'
        uppercase
      >
        {intl.formatMessage(messages.history)}
      </Text>
    </Layout>
    <Layout basis='16px' />
    <Layout>
      <AutoSizer disableHeight>
        {({ width }) => (
          <VirtualizedTable
            width={width}
            height={271}
            rowCount={history.length}
            rowGetter={({ index }) => history[index]}
            headerHeight={33}
          >
            <TableColumn
              dataKey='date'
              label={intl.formatMessage(messages.date)}
              headerRenderer={({ label }) => label}
              width={150}
            />
            <TableColumn
              dataKey='coin'
              label={intl.formatMessage(messages.coin)}
              headerRenderer={({ label }) => label}
              width={100}
            />
            <TableColumn
              dataKey='action'
              label={intl.formatMessage(messages.action)}
              headerRenderer={({ label }) => label}
              width={100}
              cellRenderer={({ cellData }) => intl.formatMessage(messages[cellData])}
            />
            <TableColumn
              dataKey='amount'
              label={intl.formatMessage(messages.amount)}
              headerRenderer={({ label }) => label}
              width={150}
            />
            <TableColumn
              dataKey='fee'
              label={intl.formatMessage(messages.fee)}
              headerRenderer={({ label }) => label}
              width={150}
            />
            <TableColumn
              dataKey='total'
              label={intl.formatMessage(messages.total)}
              headerRenderer={({ label }) => label}
              width={150}
            />
            <TableColumn
              dataKey='status'
              label={intl.formatMessage(messages.status)}
              headerRenderer={({ label }) => label}
              width={150}
              cellRenderer={({ cellData }) => intl.formatMessage(messages[cellData])}
            />
          </VirtualizedTable>
        )}
      </AutoSizer>
    </Layout>
  </Column>
)

export default injectIntl(Balances)
