import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout, Row } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import Base from './Base'
import { Text } from '../text'
import { SwitcherToggle, SwitcherToggleContainer } from '../switcher'
import { Block } from '../content'
import { HintInput, Hint } from '../input'
import messages from './messages'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: '0 0 auto',
    position: 'relative',
    width: '100%',
    height: '64px',
    '& div': {
      transition: 'all ease-in 0.1s',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      position: 'absolute',
      top: '2px',
      boxSizing: 'border-box',
      '&:nth-child(1)': {
        height: '60px',
        width: '50%',
        left: '0',
        paddingLeft: '64px',
        justifyContent: 'flex-start',
        background: '#009AFF',
        clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);\n',
      },
      '&:nth-child(2)': {
        height: '60px',
        width: '50%',
        right: '0',
        paddingRight: '64px',
        justifyContent: 'flex-end',
        background: '#8A4DD0',
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%, 10% 50%)',
      },
    },
  },
  left: {
    '& div': {
      '&:nth-child(1)': {
        top: '0',
        height: '64px',
        width: '52%',
      },
    },
  },
  right: {
    '& div': {
      '&:nth-child(2)': {
        top: '0',
        height: '64px',
        width: '52%',
      },
    },
  },
})

const ChoosePair = ({
  activeTab = 'buy',
  amount,
  onChangeActiveTab,
  onChangeAmount,
  intl,
}) => (
  <Base>
    <div
      className={styles({
        left: activeTab === 'buy',
        right: activeTab === 'sell',
      })}
    >
      <div>
        <Text
          size='medium'
          weight='bold'
          color='white'
        >
          BTC
        </Text>
      </div>
      <div>
        <Text
          size='medium'
          weight='bold'
          color='white'
        >
          XRP
        </Text>
      </div>
    </div>
    <Layout basis='22px' />
    <Layout justify='center'>
      <SwitcherToggleContainer>
        <SwitcherToggle
          target='buy'
          activeTab={activeTab}
          onClick={onChangeActiveTab}
        >
          {intl.formatMessage(messages.buy)}
        </SwitcherToggle>
        <SwitcherToggle
          target='sell'
          activeTab={activeTab}
          onClick={onChangeActiveTab}
          color={activeTab === 'sell' ? 'green700' : null}
        >
          {intl.formatMessage(messages.sell)}
        </SwitcherToggle>
      </SwitcherToggleContainer>
    </Layout>
    <Layout basis='25px' />
    <Layout>
      <Row>
        <Layout basis='56px' />
        <Text
          size='small'
          color='gray700'
          weight='medium'
        >
          {intl.formatMessage(messages.balance)}
        </Text>
        <Layout grow={1} />
        <Layout>
          <Text
            color='gray444'
          >
            0.00200000
          </Text>
        </Layout>
        <Layout basis='3px' />
        <Layout>
          <Text
            color='gray700'
            uppercase
          >
            BTC
          </Text>
        </Layout>
        <Layout basis='56px' />
      </Row>
    </Layout>
    <Layout basis='17px' />
    <Layout basis='1px'>
      <Block color='gray900' />
    </Layout>
    <Layout basis='24px' />
    <Layout>
      <Row>
        <Layout basis='56px' />
        <Text
          size='small'
          color='gray700'
          weight='medium'
        >
          {intl.formatMessage(messages.amount)}
        </Text>
      </Row>
    </Layout>
    <Layout basis='8px' />
    <Layout>
      <Row>
        <Layout basis='36px' />
        <HintInput
          type='number'
          align='dynamic'
          value={amount}
          onChange={onChangeAmount}
          onKeyPress={({ target }) => console.log(target.value)}
          rightHint={(
            <Hint
              align='right'
              transparent
            >
              <Text
                size='xsmall'
                weight='bold'
                color='gray700'
              >
                XRP
              </Text>
            </Hint>
          )}
        />
        <Layout basis='36px' />
      </Row>
    </Layout>
  </Base>
)

export default injectIntl(ChoosePair)
