import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import Registration from '../../components/desktop/Registration'
import {
  accountVerify,
  change,
  register,
} from '../../actions'

const enhance = lifecycle({
  componentWillMount() {
    this.props.onVerify()
  },
})

export default connect(
  state => ({
    username: state.auth.registration.username,
    email: state.auth.registration.email,
    password: state.auth.registration.password,
    confirmPassword: state.auth.registration.confirmPassword,
    agree: state.auth.registration.agree,
    errors: state.auth.registration.errors,
  }),
  (dispatch, { match }) => ({
    onChangeUsername: value => dispatch(change('username', value)),
    onChangeEmail: value => dispatch(change('email', value)),
    onChangePassword: value => dispatch(change('password', value)),
    onChangeConfirmPassword: value => dispatch(change('confirmPassword', value)),
    onChangeAgree: value => dispatch(change('agree', value)),
    onRegister: () => dispatch(register()),
    onVerify: () => dispatch(accountVerify(match.params)),
  }),
)(enhance(Registration))
