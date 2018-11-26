import { combineReducers } from 'redux'
import login from '../pages/login/reducers'
import gauth from '../pages/gauth/reducers'
import restore from '../pages/restore/reducers'
import registration from '../pages/registration/reducers'
import emailConfirm from '../pages/emailConfirm/reducers'
import newPassword from '../pages/newPassword/reducers'

export default combineReducers({
  login,
  gauth,
  restore,
  registration,
  emailConfirm,
  newPassword,
})
