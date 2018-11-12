import * as actions from '../constants/verification'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
