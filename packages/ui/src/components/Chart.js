import React from 'react'
import TradingViewWidget from 'react-tradingview-widget'
import { injectIntl } from 'react-intl'
import { Layout, Column } from 'flex-layouts'
import { Block } from '../content'
import { Text } from '../text'
import messages from './messages'


const Chart = ({
  intl,
}) => (
  <Column
    fill
  >
    <Layout>
      <Text
        size='small'
        color='blue800'
        weight='medium'
        uppercase
      >
        {intl.formatMessage(messages.chart)}
      </Text>
    </Layout>
    <Layout basis='8px' />
    <Layout grow={1}>
      <Block>
        <TradingViewWidget
          autosize
          height={694}
          width={758}
          locale='ru'
        />
      </Block>
    </Layout>
  </Column>
)

export default injectIntl(Chart)
