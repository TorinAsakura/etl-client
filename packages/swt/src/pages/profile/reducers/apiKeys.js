import { createReducer } from '@er/utils'
import * as actions from '../constants/apiKeys'

const initialState = {
  apiKey: '34jk2h13hiu23h4jh12i34uhij12h3',
  apiSecret: '34jk2h13hiu23h4jh12i34uhij12h3',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
