import React from 'react'
import { Route, Switch } from 'react-router'
import Auth from '@er/auth/src/containers/desktop/Auth'
import App from './App'
import Main from '../../pages/main/containers/desktop/Main'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <App>
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </App>
  </Switch>
)

export default Routes
