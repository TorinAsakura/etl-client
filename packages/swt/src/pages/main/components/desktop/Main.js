import React from 'react'
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

const Main = ({
  match,
  toggle,
  tab,
  amount,
  onChangeToggle,
  onChangeTab,
  onChangeAmount,
}) => (
  <Column align='center'>
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
  </Column>
)

export default Main
