import * as actions from '../constants/protection'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
