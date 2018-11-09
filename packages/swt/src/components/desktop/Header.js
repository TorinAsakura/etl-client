import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { withRouter, Link } from 'react-router-dom'
import { Logo } from '@er/ui/src/logo'
import { AuthButton, MenuButton } from '@er/ui/src/button'
import { Block } from '@er/ui/src/content'
import messages from '../../messages'

const Header = ({ intl, history }) => (
  <Block
    color='white'
    shadow
  >
    <Row align='center' fill>
      <Layout basis='10%' />
      <Layout>
        <Link
          to='/'
        >
          <Logo height={44} width={132} />
        </Link>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <MenuButton active />
      </Layout>
      <Layout basis='4px' />
      <Layout>
        <MenuButton icon='modules' />
      </Layout>
      <Layout basis='4px' />
      <Layout>
        <MenuButton icon='edit' />
      </Layout>
      <Layout grow={1} />
      <Layout basis='88px'>
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
      <Layout basis='10%' />
    </Row>
  </Block>
)

export default withRouter(injectIntl(Header))
