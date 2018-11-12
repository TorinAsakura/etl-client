import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Row, Column } from 'flex-layouts'
import { Text } from '@er/ui/src/text'
import { Block } from '@er/ui/src/content'
import { AuthButton } from '@er/ui/src/button'
import { Input } from '@er/ui/src/input'
import { Condition } from '@er/ui/src/condition'
import { SwitcherToggle, SwitcherToggleContainer } from '@er/ui/src/switcher'
import { Select } from '@er/ui/src/select'
import { QRCode } from '@er/ui/src/users'
import messages from '../../messages'

const Protection = ({
  intl,
  privateKey,
  authCode,
  twoFAuth,
  typeOfSuspension,
  suspensionPeriod,
  suspensionPeriodOptions,
  onChangeAuthCode,
  onChangeTypeOfSuspension,
  onChangeSuspensionPeriod,
  onChangeTwoFAuth,
}) => (
  <Column>
    <Layout basis='48px' />
    <Layout>
      <Text
        size='xxxlarge'
        color='gray444'
        weight='light'
      >
        {intl.formatMessage(messages.protection)}
      </Text>
    </Layout>
    <Layout basis='40px' />
    <Layout>
      <Row>
        <Layout basis='327px'>
          <Column>
            <Layout>
              <Text
                color='gray444'
                weight='medium'
                uppercase
              >
                {intl.formatMessage(messages.twoFactorAuth)}
              </Text>
            </Layout>
            <Layout basis='16px' />
            <Condition match={!twoFAuth}>
              <Layout>
                <Row>
                  <Layout basis='24px' />
                  <Layout>
                    <Text
                      size='xsmall'
                      color='gray700'
                      weight='medium'
                    >
                      {intl.formatMessage(messages.privateKey)}
                    </Text>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='8px' />
              <Layout>
                <Input
                  value={privateKey}
                />
              </Layout>
              <Layout basis='18px' />
            </Condition>
            <Layout>
              <Row>
                <Layout basis='24px' />
                <Layout>
                  <Text
                    size='xsmall'
                    color='gray700'
                    weight='medium'
                  >
                    {intl.formatMessage(messages.authCode)}
                  </Text>
                </Layout>
              </Row>
            </Layout>
            <Layout basis='8px' />
            <Layout>
              <Input
                value={authCode}
                onChange={onChangeAuthCode}
              />
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <SwitcherToggleContainer>
                <SwitcherToggle
                  activeTab={twoFAuth}
                  onClick={onChangeTwoFAuth}
                  color='gray700'
                >
                  OFF
                </SwitcherToggle>
                <SwitcherToggle
                  target
                  activeTab={twoFAuth}
                  onClick={onChangeTwoFAuth}
                >
                  ON
                </SwitcherToggle>
              </SwitcherToggleContainer>
            </Layout>
            <Layout basis='62px' />
          </Column>
        </Layout>
        <Condition match={!twoFAuth}>
          <Layout basis='69px' />
          <Layout basis='200px'>
            <QRCode
              value={privateKey}
            />
          </Layout>
        </Condition>
      </Row>
    </Layout>
    <Layout basis='1px'>
      <Block
        color='gray900'
      />
    </Layout>
    <Layout basis='64px' />
    <Layout>
      <Text
        color='gray444'
        weight='medium'
        uppercase
      >
        {intl.formatMessage(messages.voluntarySuspension)}
      </Text>
    </Layout>
    <Layout basis='26px' />
    <Layout>
      <Row>
        <Layout basis='24px' />
        <Layout>
          <Text
            size='xsmall'
            color='gray700'
            weight='medium'
          >
            {intl.formatMessage(messages.typeOfSuspension)}
          </Text>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='8px' />
    <Layout>
      <Row>
        <Layout basis='327px'>
          <Input
            value={typeOfSuspension}
            onChange={onChangeTypeOfSuspension}
          />
        </Layout>
      </Row>
    </Layout>
    <Layout basis='18px' />
    <Layout>
      <Row>
        <Layout basis='24px' />
        <Layout>
          <Text
            size='xsmall'
            color='gray700'
            weight='medium'
          >
            {intl.formatMessage(messages.suspensionPeriod)}
          </Text>
        </Layout>
      </Row>
    </Layout>
    <Layout basis='8px' />
    <Layout>
      <Row>
        <Layout basis='327px'>
          <Select
            value={suspensionPeriod}
            options={suspensionPeriodOptions}
            onChange={onChangeSuspensionPeriod}
          />
        </Layout>
      </Row>
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Row>
        <Layout basis='174px'>
          <AuthButton
            onClick={() => console.log('block')}
          >
            {intl.formatMessage(messages.block)}
          </AuthButton>
        </Layout>
      </Row>
    </Layout>
  </Column>
)

export default injectIntl(Protection)
