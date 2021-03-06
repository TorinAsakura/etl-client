import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const GAuth = ({
  intl,
  code,
  errors,
  onChangeCode,
  onConfirmCode,
}) => (
  <Layout basis='407px'>
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
              <Input
                placeholder={intl.formatMessage(messages.enterPassword)}
                value={code}
                onChange={onChangeCode}
                onEnter={onConfirmCode}
                error={errors.code || errors.verificationId}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={onConfirmCode}
                height='xlarge'
                uppercase
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
