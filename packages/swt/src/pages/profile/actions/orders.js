import * as actions from '../constants/orders'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
