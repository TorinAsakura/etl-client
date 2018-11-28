import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    display: 'grid',
    gridTemplate: '343px 343px 343px 343px / 375px 375px 375px',
    gridGap: '16px',
  },
})

class Cards extends Component {
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
          width: '1',
          height: '1',
          x: '1',
          y: '1',
          component: <Balances />,
        },
        {
          id: 2,
          width: '2',
          height: '1',
          x: '2',
          y: '1',
          component: <Chart />,
        },
        {
          id: 3,
          width: '1',
          height: '1',
          x: '1',
          y: '2',
          component: <ChoosePair
            tab={props.tab}
            onChangeTab={props.onChangeTab}
            match={props.match}
          />,
        },
        {
          id: 4,
          width: '1',
          height: '1',
          x: '2',
          y: '2',
          component: <Pair
            amount={props.amount}
            toggle={props.toggle}
            onChangeToggle={props.onChangeToggle}
            onChangeAmount={props.onChangeAmount}
          />,
        },
        {
          id: 5,
          width: '1',
          height: '1',
          x: '3',
          y: '2',
          component: <BuyOrders
            activeTab={props.toggle}
            orders={props.orders}
          />,
        },
        {
          id: 6,
          width: '2',
          height: '1',
          x: '1',
          y: '3',
          component: <ActiveOrders />,
        },
        {
          id: 7,
          width: '1',
          height: '2',
          x: '3',
          y: '3',
          component: <TradingHistory />,
        },
        {
          id: 8,
          width: '2',
          height: '1',
          x: '1',
          y: '4',
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
    this.moveCard = this.moveCard.bind(this)
    this.prevCard = this.prevCard.bind(this)
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

  moveCard = (dragItem, hoverItem) => {
    const { cards } = this.state

    if (dragItem.width === '1' && dragItem.height === '1') {
      if (hoverItem.width === '1' && hoverItem.height === '1') {
        cards[dragItem.index].x = hoverItem.x
        cards[dragItem.index].y = hoverItem.y
        cards[hoverItem.index].x = dragItem.x
        cards[hoverItem.index].y = dragItem.y
      }

      this.setState({ cards })
    }

    if (dragItem.width === '2' && dragItem.height === '1') {
      if (hoverItem.height === '1') {
        if (hoverItem.width === '1') {
          if (hoverItem.x === '1' || hoverItem.x === '2') {
            if (hoverItem.y === dragItem.y) {
              cards[dragItem.index].x = hoverItem.x
              cards[hoverItem.index].x = (parseInt(dragItem.x, 10) + 1).toString()
            } else if (hoverItem.y !== dragItem.y) {
              cards[dragItem.index].x = hoverItem.x
              cards[dragItem.index].y = hoverItem.y
              cards[hoverItem.index].x = dragItem.x
              cards[hoverItem.index].y = dragItem.y
              cards[hoverItem.index + 1].x = (parseInt(dragItem.x, 10) + 1).toString()
              cards[hoverItem.index + 1].y = dragItem.y
            }
          }

          if (hoverItem.x === '3') {
            if (hoverItem.y === dragItem.y) {
              cards[dragItem.index].x = (parseInt(hoverItem.x, 10) - 1).toString()
              cards[hoverItem.index].x = dragItem.x
            } else {
              const prev = this.prevCard(hoverItem)
              cards[dragItem.index].x = (parseInt(hoverItem.x, 10) - 1).toString()
              cards[dragItem.index].y = hoverItem.y
              cards[hoverItem.index].x = (parseInt(dragItem.x, 10) + 1).toString()
              cards[hoverItem.index].y = dragItem.y
              cards[prev].x = dragItem.x
              cards[prev].y = dragItem.y
            }
          }
        }

        if (hoverItem.width === '2') {
          cards[dragItem.index].x = hoverItem.x
          cards[dragItem.index].y = hoverItem.y
          cards[hoverItem.index].x = dragItem.x
          cards[hoverItem.index].y = dragItem.y
        }
      }

      this.setState({ cards })
    }
  }

  prevCard = (item) => {
    const { cards } = this.state

    return cards.findIndex(e => e.x === (parseInt(item.x, 10) - 1).toString() && e.y === item.y)
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
            width={card.width}
            height={card.height}
            x={card.x}
            y={card.y}
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
