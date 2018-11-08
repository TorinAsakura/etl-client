import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Text } from '@er/ui/src/text'
import Header from './Header'
import messages from '../../messages'

const App = ({ children, intl }) => (
  <Column fill>
    <Layout basis='64px'>
      <Header />
    </Layout>
    <Layout basis='4px' />
    <Layout justify='center'>
      {children}
    </Layout>
    <Layout basis='35px' grow={1} />
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
)

export default injectIntl(App)
