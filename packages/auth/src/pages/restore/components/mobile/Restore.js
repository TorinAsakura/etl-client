import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout, Row } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Input } from '@er/ui/src/input'
import { Text } from '@er/ui/src/text'
import { NavLink } from '@er/ui/src/link'
import { AuthButton } from '@er/ui/src/button'
import messages from '../../messages'

const Restore = ({
  intl,
  email,
  errors,
  onChangeEmail,
  onRestore,
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
                {intl.formatMessage(messages.passwordRecovery)}
              </Text>
            </Layout>
            <Layout basis='40px' />
            <Layout justify='center'>
              <Input
                placeholder={intl.formatMessage(messages.email)}
                value={email}
                onChange={onChangeEmail}
                onEnter={onRestore}
                error={errors.email}
              />
            </Layout>
            <Layout basis='24px' />
            <Layout>
              <AuthButton
                onClick={onRestore}
                height='xlarge'
                uppercase
              >
                {intl.formatMessage(messages.send)}
              </AuthButton>
            </Layout>
            <Layout basis='24px' />
            <Layout justify='center'>
              <NavLink to='/auth'>
                <Text
                  color='blue800'
                  size='small'
                >
                  {intl.formatMessage(messages.login)}
                </Text>
              </NavLink>
            </Layout>
            <Layout basis='16px' />
            <Layout justify='center'>
              <NavLink to='/auth/registration'>
                <Text
                  color='blue800'
                  size='small'
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

export default injectIntl(Restore)
