import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import messages from './messages'
import Text from '../text/Text'

const Footer = ({ intl }) => (
  <Column>
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

export default injectIntl(Footer)
