import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Row, Column } from 'flex-layouts'
import { Text } from '@er/ui/src/text'
import { Block } from '@er/ui/src/content'
import { AuthButton } from '@er/ui/src/button'
import { Input } from '@er/ui/src/input'
import { Select } from '@er/ui/src/select'
import { Checkbox } from '@er/ui/src/checkbox'
import messages from '../../messages'

const Verification = ({
  intl,
  lastName,
  firstName,
  birthDate,
  citizenship,
  citizenshipOptions,
  idNumber,
  idIssueDate,
  idExpireDate,
  country,
  countryOptions,
  city,
  address,
  identityVerification,
  proofOfAddress,
  selfie,
  agree,
  onChangeLastName,
  onChangeFirstName,
  onChangeBirthDate,
  onChangeCitizenship,
  onChangeIdNumber,
  onChangeIdIssueDate,
  onChangeIdExpireDate,
  onChangeCountry,
  onChangeCity,
  onChangeAddress,
  onChangeIdentityVerification,
  onChangeProofOfAddress,
  onChangeSelfie,
  onChangeAgree,
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
            {intl.formatMessage(messages.verification)}
          </Text>
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.lastName)}
            value={lastName}
            onChange={onChangeLastName}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.firstName)}
            value={firstName}
            onChange={onChangeFirstName}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.birthDate)}
            value={birthDate}
            onChange={onChangeBirthDate}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Select
            placeholder={intl.formatMessage(messages.citizenship)}
            value={citizenship}
            options={citizenshipOptions}
            onChange={onChangeCitizenship}
          />
        </Layout>
        <Layout basis='38px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.idNumber)}
            value={idNumber}
            onChange={onChangeIdNumber}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.idIssueDate)}
            value={idIssueDate}
            onChange={onChangeIdIssueDate}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.idExpireDate)}
            value={idExpireDate}
            onChange={onChangeIdExpireDate}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Select
            placeholder={intl.formatMessage(messages.country)}
            value={country}
            options={countryOptions}
            onChange={onChangeCountry}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.city)}
            value={city}
            onChange={onChangeCity}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.address)}
            value={address}
            onChange={onChangeAddress}
          />
        </Layout>
        <Layout basis='48px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.identityVerification)}
            value={identityVerification}
            onChange={onChangeIdentityVerification}
          />
        </Layout>
        <Layout basis='42px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.proofOfAddress)}
            value={proofOfAddress}
            onChange={onChangeProofOfAddress}
          />
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.selfie)}
            value={selfie}
            onChange={onChangeSelfie}
          />
        </Layout>
        <Layout basis='48px' />
        <Layout basis='1px'>
          <Block
            color='gray900'
          />
        </Layout>
        <Layout basis='40px' />
        <Layout justify='center'>
          <Row align='center' justify='center'>
            <Layout>
              <Checkbox
                value={agree}
                onChange={onChangeAgree}
              />
            </Layout>
            <Layout basis='12px' />
            <Layout>
              <Text
                size='small'
                color='gray444'
              >
                {intl.formatMessage(messages.iAgreeWith)}
              </Text>
            </Layout>
            <Layout basis='3px' />
            <Layout>
              <Text
                size='small'
                color='blue800'
              >
                {intl.formatMessage(messages.terms)}
              </Text>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='37px' />
        <Layout>
          <Row justify='center'>
            <Layout basis='174px'>
              <AuthButton
                onClick={() => console.log('verification')}
                uppercase
              >
                {intl.formatMessage(messages.verification)}
              </AuthButton>
            </Layout>
          </Row>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(Verification)
