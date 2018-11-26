import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '@er/common/src/actions/security'
import Header from '../../components/desktop/Header'

export default withRouter(connect(
  state => ({
    token: state.security.token,
  }),
  (dispatch, { history }) => ({
    onLogin: () => history.push('/auth'),
    onRegistration: () => history.push('/auth/registration'),
    onLogout: () => dispatch(logout()),
    onProfile: () => history.push('/profile'),
    onBalances: () => history.push('/profile/balances'),
    onOrders: () => history.push('/profile/orders'),
    onProtection: () => history.push('/profile/protection'),
    onVerification: () => history.push('/profile/verification'),
    onAPIKeys: () => history.push('/profile/api_keys'),
  }),
)(Header))
