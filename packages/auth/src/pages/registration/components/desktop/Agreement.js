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
  <Row>
    <Layout basis='640px'>
      <Block
        radius='large'
      >
        <Row justify='center'>
          <Layout basis='567px'>
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
                    >
                      <Text
                        color='white'
                        weight='medium'
                        uppercase
                      >
                        {intl.formatMessage(messages.done)}
                      </Text>
                    </AuthButton>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='40px' />
            </Column>
          </Layout>
        </Row>
      </Block>
    </Layout>
  </Row>
)

export default injectIntl(Registration)
