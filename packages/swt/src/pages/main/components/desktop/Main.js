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
  activeTab,
  amount,
  onChangeActiveTab,
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
            match={match}
          />
        </Layout>
        <Layout>
          <Pair
            amount={amount}
            activeTab={activeTab}
            onChangeActiveTab={onChangeActiveTab}
            onChangeAmount={onChangeAmount}
          />
        </Layout>
        <Layout>
          <BuyOrders
            activeTab={activeTab}
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
