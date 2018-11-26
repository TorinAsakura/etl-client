import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Column, Row } from 'flex-layouts'
import { AutoSizer, Column as TableColumn } from 'react-virtualized'
import { Text } from '@er/ui/src/text'
import { Block } from '@er/ui/src/content'
import { Input } from '@er/ui/src/input'
import { AuthButton } from '@er/ui/src/button'
import { VirtualizedTable } from '@er/ui/src/table'
import { AccountImage } from '@er/ui/src/users'
import messages from '../../messages'

const Profile = ({
  intl,
  email,
  accountState,
  currentPassword,
  newPassword,
  confirmPassword,
  onChangeCurrentPassword,
  onChangeNewPassword,
  onChangeConfirmPassword,
  onChangePassword,
  data,
}) => (
  <Row>
    <Layout basis='24px' />
    <Layout basis='calc(100vw - 48px)'>
      <Column>
        <Layout basis='48px' />
        <Layout justify='center'>
          <Text
            size='xxxlarge'
            color='gray444'
            weight='light'
          >
            {intl.formatMessage(messages.profile)}
          </Text>
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Row>
            <Layout>
              <AccountImage />
            </Layout>
            <Layout basis='13px' />
            <Layout>
              <Column>
                <Layout basis='8px' />
                <Layout>
                  <Text
                    size='medium'
                    color='gray444'
                  >
                    {email}
                  </Text>
                </Layout>
                <Layout basis='11px' />
                <Layout>
                  <Text
                    size='small'
                    color='red600'

                  >
                    {intl.formatMessage(messages[accountState])}
                  </Text>
                </Layout>
              </Column>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='30px' />
        <Layout basis='1px'>
          <Block
            color='gray900'
          />
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Text
            color='gray444'
            weight='medium'
            uppercase
          >
            {intl.formatMessage(messages.changePassword)}
          </Text>
        </Layout>
        <Layout basis='24px' />
        <Layout>
          <Row>
            <Layout basis='327px'>
              <Input
                type='password'
                value={currentPassword}
                onChange={onChangeCurrentPassword}
                placeholder={intl.formatMessage(messages.currentPassword)}
              />
            </Layout>
          </Row>
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Row>
            <Layout basis='327px'>
              <Input
                type='password'
                value={newPassword}
                onChange={onChangeNewPassword}
                placeholder={intl.formatMessage(messages.newPassword)}
              />
            </Layout>
          </Row>
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Row>
            <Layout basis='327px'>
              <Input
                type='password'
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                placeholder={intl.formatMessage(messages.confirmPassword)}
              />
            </Layout>
          </Row>
        </Layout>
        <Layout basis='24px' />
        <Layout>
          <Row justify='center'>
            <Layout basis='210px'>
              <AuthButton
                onClick={onChangePassword}
                uppercase
              >
                {intl.formatMessage(messages.changePassword)}
              </AuthButton>
            </Layout>
          </Row>
        </Layout>
        <Layout basis='40px' />
        <Layout basis='1px'>
          <Block
            color='gray900'
          />
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Text
            color='gray444'
            weight='medium'
            uppercase
          >
            {intl.formatMessage(messages.lastLogin)}
          </Text>
        </Layout>
        <Layout basis='16px' />
        <Layout>
          <Row justify='center'>
            <Layout basis='calc(100% + 14px)'>
              <AutoSizer disableHeight>
                {({ width }) => (
                  <VirtualizedTable
                    headerHeight={33}
                    width={width}
                    height={271}
                    rowCount={data.length}
                    rowGetter={({ index }) => data[index]}
                    headerRenderer={({ label }) => label}
                  >
                    <TableColumn
                      dataKey='date'
                      label={intl.formatMessage(messages.date)}
                      width={100}
                      headerRenderer={({ label }) => label}
                    />
                    <TableColumn
                      dataKey='ip'
                      headerRenderer={({ label }) => label}
                      label={intl.formatMessage(messages.ipAddress)}
                      width={90}
                    />
                    <TableColumn
                      dataKey='location'
                      headerRenderer={({ label }) => label}
                      label={intl.formatMessage(messages.location)}
                      width={130}
                    />
                  </VirtualizedTable>
                )}
              </AutoSizer>
            </Layout>
          </Row>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='24px' />
  </Row>
)

export default injectIntl(Profile)
