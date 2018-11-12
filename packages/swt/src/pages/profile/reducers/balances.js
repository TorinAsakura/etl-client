import { createReducer } from '@er/utils'
import * as actions from '../constants/balances'

const initialState = {
  balance: [
    {
      id: '1',
      coin: 'BTC',
      balance: '0.00200000',
      inOrder: '0.00200000',
      btcValue: '0.00200000',
    },
    {
      id: '2',
      coin: 'BTC',
      balance: '0.00200000',
      inOrder: '0.00200000',
      btcValue: '0.00200000',
    },
  ],
  history: [
    {
      date: '22:45 25.10.18',
      coin: 'ETH',
      action: 'deposit',
      amount: '0.002000000',
      fee: '0.002000000',
      total: '0.002000000',
      status: 'successful',
    },
    {
      date: '22:45 25.10.18',
      coin: 'ETH',
      action: 'deposit',
      amount: '0.002000000',
      fee: '0.002000000',
      total: '0.002000000',
      status: 'successful',
    },
  ],
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
