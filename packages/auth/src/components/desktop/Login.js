import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Block } from '@swt/ui/src/content'
import { AuthInput } from '@swt/ui/src/input'
import { Text } from '@swt/ui/src/text'
import { RouterLink } from '@swt/ui/src/link'
import { AuthButton } from '@swt/ui/src/button'

const Login = ({ onLogin }) => (
  <Column>
    <Layout basis='65px' />
    <Layout justify='center'>
      <Block auth>
        <Column>
          <Layout basis='40px' />
          <Layout justify='center'>
            <Text size='large' weight='light' color='gray444'>
              Authorization
            </Text>
          </Layout>
          <Layout basis='40px' />
          <Layout justify='center'>
            <Layout basis='40px' />
            <AuthInput placeholder='Username' />
            <Layout basis='40px' />
          </Layout>
          <Layout basis='16px' />
          <Layout justify='center'>
            <Layout basis='40px' />
            <AuthInput placeholder='Password' type='password' />
            <Layout basis='40px' />
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Layout basis='64px' />
            <RouterLink to='/auth/restore'>
              <Text color='gray700'>Forgot password?</Text>
            </RouterLink>
          </Layout>
          <Layout basis='32px' />
          <Layout>
            <Layout basis='40px' />
            <AuthButton onClick={onLogin}>
              <Text color='white' weight='medium'>
                LOG IN
              </Text>
            </AuthButton>
            <Layout basis='40px' />
          </Layout>
          <Layout basis='24px' />
          <Layout>
            <Layout basis='166px' />
            <RouterLink to='/auth/registration'>
              <Text color='blue800'>Registration</Text>
            </RouterLink>
          </Layout>
        </Column>
      </Block>
    </Layout>
    <Layout basis='24px' />
  </Column>
)

export default Login
