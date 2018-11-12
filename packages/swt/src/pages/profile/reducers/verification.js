import { createReducer } from '@er/utils'
import * as actions from '../constants/verification'

const initialState = {
  lastName: '',
  firstName: '',
  birthDate: '',
  citizenship: '',
  citizenshipOptions: [],
  idNumber: '',
  idIssueDate: '',
  idExpireDate: '',
  country: '',
  countryOptions: [],
  city: '',
  address: '',
  identityVerification: '',
  proofOfAddress: '',
  selfie: '',
  agree: false,
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
