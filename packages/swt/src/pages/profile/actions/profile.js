import * as actions from '../constants/profile'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
