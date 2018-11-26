import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Row, Column } from 'flex-layouts'
import { Text } from '@er/ui/src/text'
import { AuthButton } from '@er/ui/src/button'
import { CopyInput } from '@er/ui/src/input'
import { QRCode } from '@er/ui/src/users'
import messages from '../../messages'

const ApiKeys = ({
  intl,
  apiKey,
  apiSecret,
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
            {intl.formatMessage(messages.apiKeys)}
          </Text>
        </Layout>
        <Layout basis='40px' />
        <Layout justify='center'>
          <QRCode
            value={apiKey}
          />
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Row>
            <Layout basis='24px' />
            <Layout>
              <Text
                size='xsmall'
                color='gray700'
                weight='medium'
              >
                {intl.formatMessage(messages.apiKey)}
              </Text>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='8px' />
        <Layout>
          <CopyInput
            value={apiKey}
          />
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
                {intl.formatMessage(messages.apiSecret)}
              </Text>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='8px' />
        <Layout>
          <CopyInput
            value={apiSecret}
          />
        </Layout>
        <Layout basis='35px' />
        <Layout>
          <AuthButton
            onClick={() => console.log('generate and save')}
            uppercase
          >
            {intl.formatMessage(messages.generateAndSave)}
          </AuthButton>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(ApiKeys)
