import { createReducer } from '@er/utils'
import * as actions from '../constants/profile'

const initialState = {
  email: 'maxim@gmail.com',
  accountState: 'verification',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  data: [
    {
      date: '22:45 27.10.18',
      ip: '46.237.6.177',
      location: 'Moscow Russian Federation',
    },
    {
      date: '22:45 27.10.18',
      ip: '46.237.6.177',
      location: 'Moscow Russian Federation',
    },
  ],
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
})
