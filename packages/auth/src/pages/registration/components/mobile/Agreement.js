import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Text } from '@er/ui/src/text'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const Registration = ({
  intl,
  history,
}) => (
  <Layout basis='96vw'>
    <Block
      radius='large'
    >
      <Row justify='center'>
        <Column>
          <Layout basis='40px' />
          <Layout justify='center'>
            <Text
              size='large'
              weight='light'
              color='gray444'
            >
              {intl.formatMessage(messages.userAgreement)}
            </Text>
          </Layout>
          <Layout basis='40px' />
          <Layout basis='625px'>
              Text
          </Layout>
          <Layout basis='32px' />
          <Layout>
            <Row justify='center'>
              <Layout basis='327px'>
                <AuthButton
                  onClick={() => history.goBack()}
                  height='xlarge'
                  uppercase
                >
                  {intl.formatMessage(messages.done)}
                </AuthButton>
              </Layout>
            </Row>
          </Layout>
          <Layout basis='40px' />
        </Column>
      </Row>
    </Block>
  </Layout>
)

export default injectIntl(Registration)
