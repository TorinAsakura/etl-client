import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input as AuthInput } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const GAuth = ({
  intl,
  password,
  onChangePassword,
  history,
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
              >
                {intl.formatMessage(messages.googleAuthentication)}
              </Text>
            </Layout>
            <Layout basis='40px' />
            <Layout>
              <AuthInput
                placeholder={intl.formatMessage(messages.enterPassword)}
                value={password}
                onChange={onChangePassword}
                onKeyPress={() => history.push('/')}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={() => history.push('/')}
              >
                {intl.formatMessage(messages.submit)}
              </AuthButton>
            </Layout>
            <Layout basis='40px' />
          </Column>
        </Layout>
      </Row>
    </Block>
  </Layout>
)

export default injectIntl(GAuth)