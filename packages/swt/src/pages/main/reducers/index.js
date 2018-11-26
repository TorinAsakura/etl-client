/* eslint-disable no-param-reassign,prefer-destructuring */
import { createReducer } from '@er/utils'
import * as actions from '../constants'

const initialState = {
  toggle: 'buy',
  tab: 'BTC',
  amount: '',
  orders: {
    sell: [],
    buy: [],
  },
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.getOrders]: (state, { data }) => {
    const array = Object.entries(data)

    const buy = array.reduce((orders, currentValue) => {
      currentValue[1].bid.forEach((item) => { item.exchange = currentValue[0] })
      return orders.concat(currentValue[1].bid)
    }, [])

    const sell = array.reduce((orders, currentValue) => {
      currentValue[1].ask.forEach((item) => { item.exchange = currentValue[0] })
      return orders.concat(currentValue[1].ask)
    }, [])

    return ({
      ...state,
      orders: {
        buy,
        sell,
      },
    })
  },
})
