import { createReducer } from '@er/utils'
import * as actions from '../constants/orders'

const initialState = {
  openOrders: [
    {
      date: '22:22 24.10.18',
      pair: 'BTC / ETH',
      type: 'buy',
      amount: '0.00200000',
      price: '0.00200000',
      fee: '0.00200000',
      completed: '0.00200000',
      total: '0.00200000',
    },
    {
      date: '22:22 24.10.18',
      pair: 'BTC / ETH',
      type: 'sell',
      amount: '0.00200000',
      price: '0.00200000',
      fee: '0.00200000',
      completed: '0.00200000',
      total: '0.00200000',
    },
    {
      date: '22:22 24.10.18',
      pair: 'BTC / ETH',
      type: 'buy',
      amount: '0.00200000',
      price: '0.00200000',
      fee: '0.00200000',
      completed: '0.00200000',
      total: '0.00200000',
    },
  ],
  tradeHistory: [
    {
      date: '22:22 24.10.18',
      pair: 'BTC / ETH',
      type: 'buy',
      amount: '0.00200000',
      price: '0.00200000',
      fee: '0.00200000',
      completed: '0.00200000',
      total: '0.00200000',
    },
    {
      date: '22:22 24.10.18',
      pair: 'BTC / ETH',
      type: 'buy',
      amount: '0.00200000',
      price: '0.00200000',
      fee: '0.00200000',
      completed: '0.00200000',
      total: '0.00200000',
    },
    {
      date: '22:22 24.10.18',
      pair: 'BTC / ETH',
      type: 'sell',
      amount: '0.00200000',
      price: '0.00200000',
      fee: '0.00200000',
      completed: '0.00200000',
      total: '0.00200000',
    },
  ],
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
