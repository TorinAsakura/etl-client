import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Login from '../../pages/login/containers/desktop/Login'
import GAuth from '../../pages/gauth/containers/desktop/GAuth'
import Restore from '../../pages/restore/containers/desktop/Restore'
import Registration from '../../pages/registration/containers/desktop/Registration'
import Agreement from '../../pages/registration/containers/desktop/Agreement'
import Success from '../../pages/restore/containers/desktop/Success'


const Auth = () => (
  <App>
    <Switch>
      <Route path='/auth' exact component={Login} />
      <Route path='/auth/password' component={GAuth} />
      <Route path='/auth/registration' exact component={Registration} />
      <Route path='/auth/registration/agreement' component={Agreement} />
      <Route path='/auth/restore' exact component={Restore} />
      <Route path='/auth/restore/success' component={Success} />
    </Switch>
  </App>
)

export default Auth
