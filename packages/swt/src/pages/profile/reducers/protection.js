import { createReducer } from '@er/utils'
import * as actions from '../constants/protection'

const initialState = {
  privateKey: '0127398137412030',
  authCode: '',
  twoFAuth: false,
  typeOfSuspension: '',
  suspensionPeriod: '',
  suspensionPeriodOptions: [
    {
      id: '0',
      name: '0',
    },
    {
      id: '1',
      name: '1',
    },
    {
      id: '2',
      name: '2',
    },
  ],
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
