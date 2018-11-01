import { createReducer } from '@er/utils'
import * as actions from '../constants'

const initialState = {
  password: '',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
