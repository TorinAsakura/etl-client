import { createReducer } from '@er/utils'
import * as actions from '../constants/init'

const initialState = {}

export default createReducer(initialState, {
  [actions.loadUser]: (state, { user }) => ({ ...state, user }),
  [actions.clearUser]: () => ({ ...initialState }),
})
