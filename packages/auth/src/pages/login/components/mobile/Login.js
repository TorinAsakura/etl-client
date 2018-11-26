import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input as AuthInput } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { NavLink } from '@er/ui/src/link'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const Login = ({
  intl,
  username,
  password,
  onChangeUsername,
  onChangePassword,
  onLogin,
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
                {intl.formatMessage(messages.authorization)}
              </Text>
            </Layout>
            <Layout basis='40px' />
            <Layout justify='center'>
              <AuthInput
                placeholder={intl.formatMessage(messages.username)}
                value={username}
                onChange={onChangeUsername}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout justify='center'>
              <AuthInput
                placeholder={intl.formatMessage(messages.password)}
                type='password'
                value={password}
                onChange={onChangePassword}
                onKeyPress={onLogin}
              />
            </Layout>
            <Layout basis='12px' />
            <Layout>
              <Row>
                <Layout basis='24px' />
                <Layout>
                  <NavLink to='/auth/restore'>
                    <Text
                      color='gray700'
                      size='small'
                    >
                      {intl.formatMessage(messages.forgotPassword)}
                    </Text>
                  </NavLink>
                </Layout>
              </Row>
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={onLogin}
              >
                {intl.formatMessage(messages.login)}
              </AuthButton>
            </Layout>
            <Layout basis='24px' />
            <Layout justify='center'>
              <NavLink to='/auth/registration'>
                <Text
                  color='blue800'
                >
                  {intl.formatMessage(messages.registration)}
                </Text>
              </NavLink>
            </Layout>
            <Layout basis='40px' />
          </Column>
        </Layout>
      </Row>
    </Block>
  </Layout>
)

export default injectIntl(Login)
