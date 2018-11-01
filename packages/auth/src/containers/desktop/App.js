import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Logo } from '@er/ui/src/logo'
import { Text } from '@er/ui/src/text'
import messages from '@er/swt/src/messages'

const App = ({ children, intl }) => (
  <Block
    color='blue'
    heightFill
  >
    <Column align='center' fill>
      <Layout basis='64px' />
      <Layout>
        <Logo color='white' fontColor='white' />
      </Layout>
      <Layout basis='64px' />
      <Layout>
        <Row justify='center'>
          <Layout basis='407px'>
            {children}
          </Layout>
        </Row>
      </Layout>
      <Layout grow={1} />
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

export default injectIntl(App)
