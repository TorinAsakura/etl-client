import { createReducer } from '@er/utils'
import * as actions from '../constants/protection'

const initialState = {
  privateKey: '',
  privateKeyLink: '',
  verificationId: '',
  authCode: '',
  twoFAuth: false,
  suspensionPeriod: '',
  typeOfSuspension: '',
  typeOfSuspensionOptions: [
    {
      id: 'deposit',
      name: 'Deposit',
    },
    {
      id: 'withdrawal',
      name: 'Withdrawal',
    },
  ],
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
})
