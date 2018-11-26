import { persistReducer } from 'redux-persist'
import { createReducer } from '@er/utils'
import storage from 'redux-persist/es/storage'
import * as actions from '../constants/security'

const initialState = {
  token: '',
  expiresIn: '',
}

const reducer = createReducer(initialState, {
  [actions.login]: (state, { token, expiresIn }) => ({ ...state, token, expiresIn }),
  [actions.logout]: state => ({ ...state, token: '', expiresIn: '' }),
})

export default persistReducer({
  key: 'root',
  storage,
}, reducer)
