import { createReducer } from '@er/utils'
import * as actions from '../constants'

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false,
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => ({ ...initialState }),
})
