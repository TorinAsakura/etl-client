import { connect } from 'react-redux'
import Registration from '../../components/mobile/Registration'
import { change, register } from '../../actions'

export default connect(
  state => ({
    username: state.auth.registration.username,
    email: state.auth.registration.email,
    password: state.auth.registration.password,
    confirmPassword: state.auth.registration.confirmPassword,
    agree: state.auth.registration.agree,
  }),
  dispatch => ({
    onChangeUsername: value => dispatch(change('username', value)),
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onChangeConfirmPassword: value => dispatch(change('confirmPassword', value)),
    onChangeAgree: value => dispatch(change('agree', value)),
    onRegister: () => dispatch(register()),
  }),
)(Registration)
