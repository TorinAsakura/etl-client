import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Row, Column } from 'flex-layouts'
import { Text } from '@er/ui/src/text'
import { Block } from '@er/ui/src/content'
import { AuthButton } from '@er/ui/src/button'
import { Input, HintInput, Hint, CopyInput } from '@er/ui/src/input'
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
  typeOfSuspensionOptions,
  suspensionPeriod,
  onChangeAuthCode,
  onChangeTypeOfSuspension,
  onChangeSuspensionPeriod,
  onChangeTwoFAuth,
}) => (
  <Row>
    <Layout basis='24px' />
    <Layout basis='calc(100% - 48px)'>
      <Column>
        <Layout basis='48px' />
        <Layout justify='center'>
          <Text
            size='xxxlarge'
            color='gray444'
            weight='light'
          >
            {intl.formatMessage(messages.protection)}
          </Text>
        </Layout>
        <Layout basis='40px' />
        <Condition match={!twoFAuth}>
          <Layout justify='center'>
            <QRCode
              value={privateKey}
            />
          </Layout>
          <Layout basis='40px' />
        </Condition>
        <Layout justify='center'>
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
            <CopyInput
              value={privateKey}
              type='text'
              text={privateKey}
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
            data-lpignore
          />
        </Layout>
        <Layout basis='35px' />
        <Layout justify='center'>
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
        <Layout basis='1px'>
          <Block
            color='gray900'
          />
        </Layout>
        <Layout basis='64px' />
        <Layout justify='center'>
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
              <Select
                value={typeOfSuspension}
                options={typeOfSuspensionOptions}
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
              <HintInput
                value={suspensionPeriod}
                onChange={onChangeSuspensionPeriod}
                mask={[/\d+/, /\d+/, /\d+/, /\d+/, /\d+/, /\d+/, /\d+/, /\d+/]}
                guide={false}
                rightHint={(
                  <Hint
                    align='right'
                  >
                    <Text
                      size='xsmall'
                      color='gray700'
                      weight='bold'
                      uppercase
                    >
                      {intl.formatMessage(messages.days)}
                    </Text>
                  </Hint>
                )}
              />
            </Layout>
          </Row>
        </Layout>
        <Layout basis='24px' />
        <Layout>
          <Row justify='center'>
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
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(Protection)
