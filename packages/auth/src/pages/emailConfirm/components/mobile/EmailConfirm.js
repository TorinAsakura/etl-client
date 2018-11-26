import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input as AuthInput } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const EmailConfirm = ({
  intl,
  code,
  verificationId,
  onChangeCode,
  onChangeVerificationId,
  onConfirm,
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
                placeholder={intl.formatMessage(messages.enterVerificationId)}
                value={verificationId}
                onChange={onChangeVerificationId}
                onEnter={onConfirm}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthInput
                placeholder={intl.formatMessage(messages.enterPassword)}
                value={code}
                onChange={onChangeCode}
                onEnter={onConfirm}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={onConfirm}
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

export default injectIntl(EmailConfirm)
