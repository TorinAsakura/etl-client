import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { NavLink } from '@er/ui/src/link'
import { AuthButton } from '@er/ui/src/button'
import { Checkbox } from '@er/ui/src/checkbox'
import messages from '../../messages'

const Registration = ({
  intl,
  username,
  email,
  password,
  confirmPassword,
  agree,
  errors,
  onChangeUsername,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onChangeAgree,
  onRegister,
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
                {intl.formatMessage(messages.registration)}
              </Text>
            </Layout>
            <Layout basis='40px' />
            <Layout justify='center'>
              <Input
                placeholder={intl.formatMessage(messages.username)}
                value={username}
                onChange={onChangeUsername}
                error={errors.login}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout justify='center'>
              <Input
                placeholder={intl.formatMessage(messages.email)}
                value={email}
                onChange={onChangeEmail}
                error={errors.email}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout justify='center'>
              <Input
                type='password'
                placeholder={intl.formatMessage(messages.password)}
                value={password}
                onChange={onChangePassword}
                error={errors.password}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout justify='center'>
              <Input
                type='password'
                placeholder={intl.formatMessage(messages.confirmPassword)}
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                onEnter={onRegister}
              />
            </Layout>
            <Layout basis='16px' />
            <Layout>
              <Row align='center'>
                <Layout basis='16px' />
                <Layout>
                  <Checkbox
                    value={agree}
                    onChange={onChangeAgree}
                  />
                </Layout>
                <Layout basis='12px' />
                <Layout>
                  <Text
                    color='gray700'
                    size='small'
                  >
                    {intl.formatMessage(messages.agreeWithService)}
                  </Text>
                </Layout>
                <Layout basis='3px' />
                <Layout>
                  <NavLink
                    to='/auth/registration/agreement'
                  >
                    <Text
                      color='blue800'
                      size='small'
                    >
                      {intl.formatMessage(messages.termsAndConditions)}
                    </Text>
                  </NavLink>
                </Layout>
              </Row>
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={onRegister}
                disabled={!agree}
                height='xlarge'
                uppercase
              >
                {intl.formatMessage(messages.register)}
              </AuthButton>
            </Layout>
            <Layout basis='24px' />
            <Layout justify='center'>
              <NavLink to='/auth'>
                <Text
                  color='blue800'
                >
                  {intl.formatMessage(messages.login)}
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

export default injectIntl(Registration)
