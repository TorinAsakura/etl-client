import { connect } from 'react-redux'
import Login from '../../components/mobile/Login'
import { change, signin } from '../../actions'

export default connect(
  state => ({
    username: state.auth.login.username,
    password: state.auth.login.password,
    errors: state.auth.login.errors,
  }),
  dispatch => ({
    onChangeUsername: value => dispatch(change('username', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onLogin: () => dispatch(signin()),
  }),
)(Login)
