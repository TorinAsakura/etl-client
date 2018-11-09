import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
