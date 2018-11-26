import React from 'react'
import TradingViewWidget from 'react-tradingview-widget'
import { injectIntl } from 'react-intl'
import { Layout } from 'flex-layouts'
import Base from './Base'
import { Block } from '../content'
import { Text } from '../text'
import messages from './messages'


const Chart = ({
  intl,
  mobile,
}) => (
  <Base
    mobile={mobile}
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
  </Base>
)

export default injectIntl(Chart)
