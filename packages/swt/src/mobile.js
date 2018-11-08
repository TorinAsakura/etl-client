import React from 'react'
import { render } from 'react-dom'
import 'flex-layouts/lib/flex-layouts.css'
import { createBrowserHistory } from 'history'
import { configureStore } from './store'
import Root from './containers/mobile/Root'
import './index.css'
import './mobile.css'

const history = createBrowserHistory()
const { store, persistor } = configureStore({}, history)

render(
  <Root store={store} history={history} persistor={persistor} />,
  document.getElementById('app'),
)
