import * as actions from '../constants/apiKeys'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})
