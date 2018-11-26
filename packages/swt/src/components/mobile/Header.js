import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { withRouter, Link } from 'react-router-dom'
import { LogoMobile } from '@er/ui/src/logo'
import { AuthButton } from '@er/ui/src/button'
import { Block } from '@er/ui/src/content'
import messages from '../../messages'

const Header = ({ intl, history }) => (
  <Block
    color='white'
    shadow
  >
    <Row align='center' fill>
      <Layout basis='16px' />
      <Layout>
        <Link
          to='/'
        >
          <LogoMobile />
        </Link>
      </Layout>
      <Layout grow={1} />

      <Layout basis='60px'>
        <AuthButton
          onClick={() => history.push('/profile')}
        >
          Profile
        </AuthButton>
      </Layout>
      <Layout basis='82px'>
        <AuthButton
          color='blue400'
          onClick={() => history.push('/auth')}
        >
          {intl.formatMessage(messages.signIn)}
        </AuthButton>
      </Layout>
      <Layout basis='4px' />
      <Layout basis='130px'>
        <AuthButton
          onClick={() => history.push('/auth/registration')}
        >
          {intl.formatMessage(messages.registration)}
        </AuthButton>
      </Layout>
      <Layout basis='16px' />
    </Row>
  </Block>
)

export default withRouter(injectIntl(Header))
