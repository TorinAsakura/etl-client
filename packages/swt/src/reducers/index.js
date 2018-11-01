import { combineReducers } from 'redux'
import auth from '@er/auth/src/reducers'
import locale from './locale'
import main from '../pages/main/reducers'

export default combineReducers({
  auth,
  locale,
  main,
})
