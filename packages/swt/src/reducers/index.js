import { combineReducers } from 'redux'
import auth from '@er/auth/src/reducers'
import security from '@er/common/src/reducers/security'
import config from './config'
import init from './init'
import locale from './locale'
import main from '../pages/main/reducers'
import profile from '../pages/profile/reducers'

export default combineReducers({
  auth,
  security,
  config,
  init,
  locale,
  main,
  profile,
})
