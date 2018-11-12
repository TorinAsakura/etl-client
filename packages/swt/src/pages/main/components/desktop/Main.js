import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import {
  Balances,
  Chart,
  ChoosePair,
  Pair,
  BuyOrders,
  ActiveOrders,
  TradingHistory,
  SolidityDetail,
} from '@er/ui/src/components'
import { Text } from '@er/ui/src/text'
import { Block } from '@er/ui/src/content'
import messages from '../../../../messages'

const Main = ({
  intl,
  match,
  toggle,
  tab,
  amount,
  onChangeToggle,
  onChangeTab,
  onChangeAmount,
}) => (
  <Block>
    <Column align='center'>
      <Layout basis='32px' />
      <Layout>
        <Row>
          <Layout>
            <Balances />
          </Layout>
          <Layout>
            <Chart />
          </Layout>
        </Row>
      </Layout>
      <Layout>
        <Row>
          <Layout>
            <ChoosePair
              tab={tab}
              onChangeTab={onChangeTab}
              match={match}
            />
          </Layout>
          <Layout>
            <Pair
              amount={amount}
              toggle={toggle}
              onChangeToggle={onChangeToggle}
              onChangeAmount={onChangeAmount}
            />
          </Layout>
          <Layout>
            <BuyOrders
              activeTab={toggle}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout>
        <Row>
          <Layout>
            <Column>
              <Layout>
                <ActiveOrders />
              </Layout>
              <Layout>
                <SolidityDetail />
              </Layout>
            </Column>
          </Layout>
          <Layout>
            <TradingHistory />
          </Layout>
        </Row>
      </Layout>
      <Layout basis='75px' grow={1} />
      <Layout justify='center'>
        <Text
          size='xsmall'
          weight='medium'
          color='gray900'
        >
          {intl.formatMessage(messages.copyright)}
        </Text>
      </Layout>
      <Layout justify='center'>
        <Text
          size='xsmall'
          weight='medium'
          color='gray900'
        >
          {intl.formatMessage(messages.address)}
        </Text>
      </Layout>
      <Layout basis='40px' />
    </Column>
  </Block>
)

export default injectIntl(Main)
