import React from 'react'
import { Row, Column, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Switcher, SwitcherTab, SwitcherTabContent } from '@er/ui/src/switcher'
import { Block } from '@er/ui/src/content'
import { Footer } from '@er/ui/src/footer'
import messages from '../../messages'
import Profile from './Profile'
import Balances from './Balances'
import Orders from './Orders'
import Protection from './Protection'
import Verification from './Verification'
import ApiKeys from './ApiKeys'

const Tabs = ({ intl }) => (
  <Block
    color='white'
  >
    <Row justify='center'>
      <Layout basis='80%'>
        <Column>
          <Layout basis='32px' />
          <Layout>
            <Switcher
              height='large'
            >
              <SwitcherTab
                height='large'
                to='/profile'
                padding
                text='normal'
                exact
              >
                {intl.formatMessage(messages.profile)}
              </SwitcherTab>
              <SwitcherTab
                height='large'
                to='/profile/balances'
                padding
                text='normal'
              >
                {intl.formatMessage(messages.balances)}
              </SwitcherTab>
              <SwitcherTab
                height='large'
                to='/profile/orders'
                padding
                text='normal'
              >
                {intl.formatMessage(messages.orders)}
              </SwitcherTab>
              <SwitcherTab
                height='large'
                to='/profile/protection'
                padding
                text='normal'
              >
                {intl.formatMessage(messages.protection)}
              </SwitcherTab>
              <SwitcherTab
                height='large'
                to='/profile/verification'
                padding
                text='normal'
              >
                {intl.formatMessage(messages.verification)}
              </SwitcherTab>
              <SwitcherTab
                height='large'
                to='/profile/api_keys'
                padding
                text='normal'
              >
                {intl.formatMessage(messages.apiKeys)}
              </SwitcherTab>
            </Switcher>
          </Layout>
          <Layout>
            <SwitcherTabContent
              path='/profile'
            >
              <Profile />
            </SwitcherTabContent>
            <SwitcherTabContent
              path='/profile/balances'
            >
              <Balances />
            </SwitcherTabContent>
            <SwitcherTabContent
              path='/profile/orders'
            >
              <Orders />
            </SwitcherTabContent>
            <SwitcherTabContent
              path='/profile/protection'
            >
              <Protection />
            </SwitcherTabContent>
            <SwitcherTabContent
              path='/profile/verification'
            >
              <Verification />
            </SwitcherTabContent>
            <SwitcherTabContent
              path='/profile/api_keys'
            >
              <ApiKeys />
            </SwitcherTabContent>
          </Layout>
          <Layout basis='75px' grow={1} />
          <Layout>
            <Footer />
          </Layout>
        </Column>
      </Layout>
    </Row>
  </Block>
)

export default injectIntl(Tabs)
