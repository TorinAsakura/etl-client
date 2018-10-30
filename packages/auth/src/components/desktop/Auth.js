import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import urljoin from 'urljoin'
import App from '../../containers/desktop/App'
import Login from '../../containers/desktop/Login'

const placeholder = text => () => <Link to='/auth'>{text}</Link>

const Auth = ({ match }) => (
  <App>
    <Switch>
      <Route path={urljoin(match.url)} exact component={Login} />
      <Route path={urljoin(match.url, '/password')} component={placeholder('/auth/password')} />
      <Route path={urljoin(match.url, '/registration')} exact component={placeholder('/auth/registration')} />
      <Route path={urljoin(match.url, '/registration/code')} component={placeholder('/auth/registration/code')} />
      <Route path={urljoin(match.url, '/restore')} exact component={placeholder('/auth/restore')} />
      <Route path={urljoin(match.url, '/restore/code')} component={placeholder('/auth/restore/code')} />
      <Route component={placeholder('404')} />
    </Switch>
  </App>
)

export default Auth
