import { createReducer } from '@er/utils'
import * as actions from '../constants'

const initialState = {
  toggle: 'buy',
  tab: 'BTC',
  amount: '',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
