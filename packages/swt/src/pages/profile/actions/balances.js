import * as actions from '../constants/balances'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
