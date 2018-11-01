import { combineReducers } from 'redux'
import login from '../pages/login/reducers'
import gauth from '../pages/gauth/reducers'
import restore from '../pages/restore/reducers'
import registration from '../pages/registration/reducers'

export default combineReducers({
  login,
  gauth,
  restore,
  registration,
})
