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
    size='2x1'
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
          width={734}
          height={288}
          locale='ru'
        />
      </Block>
    </Layout>
  </Base>
)

export default injectIntl(Chart)
