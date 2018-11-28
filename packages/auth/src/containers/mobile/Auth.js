import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Login from '../../pages/login/containers/mobile/Login'
import GAuth from '../../pages/gauth/containers/mobile/GAuth'
import Restore from '../../pages/restore/containers/mobile/Restore'
import Registration from '../../pages/registration/containers/mobile/Registration'
import Agreement from '../../pages/registration/containers/mobile/Agreement'
import Success from '../../pages/restore/containers/mobile/Success'
import NewPassword from '../../pages/newPassword/containers/mobile/NewPassword'

const Auth = () => (
  <App>
    <Switch>
      <Route path='/auth' exact component={Login} />
      <Route path='/auth/gauth' component={GAuth} />
      <Route path='/auth/registration' exact component={Registration} />
      <Route path='/auth/registration/agreement' component={Agreement} />
      <Route path='/auth/registration/success' component={Success} />
      <Route path='/auth/registration/confirm/:verificationId/:code' component={Registration} />
      <Route path='/auth/restore' exact component={Restore} />
      <Route path='/auth/restore/success' component={Success} />
      <Route path='/auth/new-password/:verificationId/:code' component={NewPassword} />
    </Switch>
  </App>
)

export default Auth
