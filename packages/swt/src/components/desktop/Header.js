import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Link } from 'react-router-dom'
import { Logo } from '@er/ui/src/logo'
import { LogOutIcon } from '@er/ui/src/icons'
import { AuthButton, MenuButton } from '@er/ui/src/button'
import { Block } from '@er/ui/src/content'
import { Condition } from '@er/ui/src/condition'
import { Dropdown, Content, Item } from '@er/ui/src/dropdown'
import { Profile } from '@er/ui/src/users'
import messages from '../../messages'

const Header = ({
  intl,
  token,
  onLogin,
  onRegistration,
  onProfile,
  onBalances,
  onOrders,
  onProtection,
  onVerification,
  onAPIKeys,
  onLogout,
}) => (
  <Block
    color='white'
    shadow
    zIndex='high'
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
      <Condition match={token}>
        <Layout basis='61px'>
          <Dropdown
            trigger={(
              <Profile />
            )}
          >
            <Content rightNegativeAlignment>
              <Item
                onClick={onProfile}
              >
                Profile
              </Item>
              <Column>
                <Layout basis='1px'>
                  <Row justify='center'>
                    <Layout basis='165px'>
                      <Block
                        color='gray900'
                      />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
              <Item
                onClick={onBalances}
              >
                Balances
              </Item>
              <Column>
                <Layout basis='1px'>
                  <Row justify='center'>
                    <Layout basis='165px'>
                      <Block
                        color='gray900'
                      />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
              <Item
                onClick={onOrders}
              >
                Orders
              </Item>
              <Column>
                <Layout basis='1px'>
                  <Row justify='center'>
                    <Layout basis='165px'>
                      <Block
                        color='gray900'
                      />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
              <Item
                onClick={onProtection}
              >
                Protection
              </Item>
              <Column>
                <Layout basis='1px'>
                  <Row justify='center'>
                    <Layout basis='165px'>
                      <Block
                        color='gray900'
                      />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
              <Item
                onClick={onVerification}
              >
                Verification
              </Item>
              <Column>
                <Layout basis='1px'>
                  <Row justify='center'>
                    <Layout basis='165px'>
                      <Block
                        color='gray900'
                      />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
              <Item
                onClick={onAPIKeys}
              >
                API Keys
              </Item>
            </Content>
          </Dropdown>
        </Layout>
        <Layout basis='4px' />

        <Layout basis='47px'>
          <AuthButton
            onClick={onLogout}
            color='none'
          >
            <LogOutIcon />
          </AuthButton>
        </Layout>
      </Condition>
      <Condition match={!token}>
        <Layout basis='88px'>
          <AuthButton
            color='blue400'
            onClick={onLogin}
          >
            {intl.formatMessage(messages.signIn)}
          </AuthButton>
        </Layout>
        <Layout basis='4px' />
        <Layout basis='130px'>
          <AuthButton
            onClick={onRegistration}
          >
            {intl.formatMessage(messages.registration)}
          </AuthButton>
        </Layout>
      </Condition>
      <Layout basis='10%' />
    </Row>
  </Block>
)

export default injectIntl(Header)
