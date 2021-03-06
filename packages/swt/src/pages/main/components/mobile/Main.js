import React from 'react'
import { Column, Layout } from 'flex-layouts'
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
import { Footer } from '@er/ui/src/footer'

const Main = ({
  match,
  toggle,
  tab,
  amount,
  onChangeToggle,
  onChangeTab,
  onChangeAmount,
}) => (
  <Column
    overflowX='hidden'
  >
    <Layout>
      <Balances
        mobile
      />
    </Layout>
    <Layout>
      <Chart
        mobile
      />
    </Layout>
    <Layout>
      <ChoosePair
        tab={tab}
        onChangeTab={onChangeTab}
        match={match}
        mobile
      />
    </Layout>
    <Layout>
      <Pair
        amount={amount}
        toggle={toggle}
        onChangeToggle={onChangeToggle}
        onChangeAmount={onChangeAmount}
        mobile
      />
    </Layout>
    <Layout>
      <BuyOrders
        activeTab={toggle}
        mobile
      />
    </Layout>
    <Layout>
      <ActiveOrders
        mobile
      />
    </Layout>
    <Layout>
      <SolidityDetail
        mobile
      />
    </Layout>
    <Layout>
      <TradingHistory
        mobile
      />
    </Layout>
    <Layout basis='35px' grow={1} />
    <Layout>
      <Footer />
    </Layout>
  </Column>
)

export default Main
