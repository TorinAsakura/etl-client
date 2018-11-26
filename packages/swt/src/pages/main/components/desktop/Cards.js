import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import update from 'immutability-helper'
import { StyleSheet } from 'elementum'
import {
  Balances,
  Chart,
  ChoosePair,
  Pair,
  BuyOrders,
  ActiveOrders,
  TradingHistory,
  SolidityDetail,
} from '@er/ui/src/components'
import Card from './Card'
import { change, initSocket, closeSocket } from '../../actions'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '1200px',
  },
})

class Cards extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      tab: props.tab,
      amount: props.amount,
      toggle: props.toggle,
      activeTab: props.activeTab,
      orders: props.orders,
      match: props.match,
      cards: [
        {
          id: 1,
          component: <Balances />,
        },
        {
          id: 2,
          component: <Chart />,
        },
        {
          id: 3,
          component: <ChoosePair
            tab={props.tab}
            onChangeTab={props.onChangeTab}
            match={props.match}
          />,
        },
        {
          id: 4,
          component: <Pair
            amount={props.amount}
            toggle={props.toggle}
            onChangeToggle={props.onChangeToggle}
            onChangeAmount={props.onChangeAmount}
          />,
        },
        {
          id: 5,
          component: <BuyOrders
            activeTab={props.toggle}
            orders={props.orders}
          />,
        },
        {
          id: 6,
          component: <ActiveOrders />,
        },
        {
          id: 7,
          component: <TradingHistory />,
        },
        {
          id: 8,
          component: <SolidityDetail />,
        },
      ],
    }

    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleToggleChange = this.handleToggleChange.bind(this)
    this.handleActiveTabChange = this.handleActiveTabChange.bind(this)
    this.handleOrdersChange = this.handleOrdersChange.bind(this)
    this.handleMatchChange = this.handleMatchChange.bind(this)
  }


  componentDidMount() {
    const { onOpenSocket } = this.props
    onOpenSocket()
  }

  componentWillReceiveProps(nextProps) {
    const {
      tab,
      amount,
      toggle,
      activeTab,
      orders,
      match,
    } = this.state

    if (nextProps.tab !== tab) {
      this.handleTabChange(nextProps)
    }
    if (nextProps.amount !== amount) {
      this.handleAmountChange(nextProps)
    }
    if (nextProps.toggle !== toggle) {
      this.handleToggleChange(nextProps)
    }
    if (nextProps.activeTab !== activeTab) {
      this.handleActiveTabChange(nextProps)
    }
    if (nextProps.orders !== orders) {
      this.handleOrdersChange(nextProps)
    }
    if (nextProps.match !== match) {
      this.handleMatchChange(nextProps)
    }
  }

  componentWillUnmount() {
    const { onCloseSocket } = this.props
    onCloseSocket()
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      // eslint-disable-next-line react/no-access-state-in-setstate
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  handleTabChange = (nextProps) => {
    const { cards } = this.state

    const card = cards.find(e => e.id === 3)
    card.component = (
      <ChoosePair
        tab={nextProps.tab}
        onChangeTab={nextProps.onChangeTab}
        match={nextProps.match}
      />
    )

    this.setState({
      cards,
      tab: nextProps.tab,
    })
  }

  handleAmountChange = (nextProps) => {
    const { cards } = this.state

    const card = cards.find(e => e.id === 4)
    card.component = (
      <Pair
        amount={nextProps.amount}
        toggle={nextProps.toggle}
        onChangeToggle={nextProps.onChangeToggle}
        onChangeAmount={nextProps.onChangeAmount}
      />
    )

    this.setState({
      cards,
      amount: nextProps.amount,
    })
  }

  handleToggleChange = (nextProps) => {
    const { cards } = this.state

    const card = cards.find(e => e.id === 4)
    card.component = (
      <Pair
        amount={nextProps.amount}
        toggle={nextProps.toggle}
        onChangeToggle={nextProps.onChangeToggle}
        onChangeAmount={nextProps.onChangeAmount}
      />
    )

    this.setState({
      cards,
      toggle: nextProps.toggle,
    })
  }

  handleActiveTabChange = (nextProps) => {
    const { cards } = this.state

    const card = cards.find(e => e.id === 5)
    card.component = (
      <BuyOrders
        activeTab={nextProps.toggle}
        orders={nextProps.orders}
      />
    )

    this.setState({
      cards,
      activeTab: nextProps.activeTab,
    })
  }

  handleOrdersChange = (nextProps) => {
    const { cards } = this.state

    const card = cards.find(e => e.id === 5)
    card.component = (
      <BuyOrders
        activeTab={nextProps.toggle}
        orders={nextProps.orders}
      />
    )

    this.setState({
      cards,
      orders: nextProps.orders,
    })
  }

  handleMatchChange = (nextProps) => {
    const { cards } = this.state

    const card = cards.find(e => e.id === 3)
    card.component = (
      <ChoosePair
        tab={nextProps.tab}
        onChangeTab={nextProps.onChangeTab}
        match={nextProps.match}
      />
    )

    this.setState({
      cards,
      match: nextProps.match,
    })
  }

  render() {
    const { cards } = this.state

    return (
      <div
        className={styles()}
      >
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            moveCard={this.moveCard}
          >
            {card.component}
          </Card>
        ))
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    toggle: state.main.toggle,
    tab: state.main.tab,
    amount: state.main.amount,
    orders: state.main.orders,
  }),
  dispatch => ({
    onChangeToggle: value => dispatch(change('toggle', value)),
    onChangeTab: value => dispatch(change('tab', value)),
    onChangeAmount: value => dispatch(change('amount', value)),
    onOpenSocket: () => dispatch(initSocket()),
    onCloseSocket: () => dispatch(closeSocket()),
  }),
)(Cards)
