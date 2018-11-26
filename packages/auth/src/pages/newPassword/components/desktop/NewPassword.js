import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input as AuthInput } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const NewPassword = ({
  intl,
  password,
  confirmPassword,
  onChangePassword,
  onChangeConfirmPassword,
  onConfirm,
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
                {intl.formatMessage(messages.newPassword)}
              </Text>
            </Layout>
            <Layout basis='40px' />
            <Layout justify='center'>
              <AuthInput
                placeholder={intl.formatMessage(messages.password)}
                type='password'
                value={password}
                onChange={onChangePassword}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout justify='center'>
              <AuthInput
                placeholder={intl.formatMessage(messages.confirmPassword)}
                type='password'
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                onEnter={onConfirm}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={onConfirm}
              >
                {intl.formatMessage(messages.confirm)}
              </AuthButton>
            </Layout>
            <Layout basis='40px' />
          </Column>
        </Layout>
      </Row>
    </Block>
  </Layout>
)

export default injectIntl(NewPassword)
