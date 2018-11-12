import React from 'react'
import { Route, Switch } from 'react-router'
import Auth from '@er/auth/src/containers/desktop/Auth'
import App from './App'
import Main from '../../pages/main/containers/desktop/Main'
import Profile from '../../pages/profile/containers/desktop/Tabs'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <App>
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/' component={Main} />
      </Switch>
    </App>
  </Switch>
)

export default Routes
