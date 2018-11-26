import { connect } from 'react-redux'
import SetPassword from '../../components/mobile/NewPassword'
import { change, verifyResetPassword } from '../../actions'

export default connect(
  state => ({
    password: state.auth.newPassword.password,
    confirmPassword: state.auth.newPassword.confirmPassword,
    errors: state.auth.newPassword.errors,
  }),
  (dispatch, { match }) => ({
    onChangePassword: value => dispatch(change('password', value)),
    onChangeConfirmPassword: value => dispatch(change('confirmPassword', value)),
    onConfirm: () => dispatch(verifyResetPassword(match.params)),
  }),
)(SetPassword)
