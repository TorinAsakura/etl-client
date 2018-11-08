import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Text } from '@er/ui/src/text'
import messages from '../../messages'

const Restore = ({
  intl,
}) => (
  <Layout basis='96vw'>
    <Block
      radius='large'
    >
      <Row justify='center'>
        <Layout basis='327px'>
          <Column>
            <Layout basis='40px' />
            <Layout justify='center'>
              <Text
                size='large'
                weight='light'
                color='gray444'
                align='center'
              >
                {intl.formatMessage(messages.emailWithInstructions)}
              </Text>
            </Layout>
            <Layout basis='40px' />
          </Column>
        </Layout>
      </Row>
    </Block>
  </Layout>
)

export default injectIntl(Restore)
