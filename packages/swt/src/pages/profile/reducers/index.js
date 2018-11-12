import { combineReducers } from 'redux'
import profile from './profile'
import balances from './balances'
import orders from './orders'
import protection from './protection'
import verification from './verification'
import apiKeys from './apiKeys'

export default combineReducers({
  profile,
  balances,
  orders,
  protection,
  verification,
  apiKeys,
})
