import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import EmailConfirm from '../../components/mobile/EmailConfirm'
import { change, verify, accountVerify } from '../../actions'

const enhance = lifecycle({
  componentWillMount() {
    this.props.onVerify()
  },
})

export default connect(
  state => ({
    code: state.auth.emailConfirm.code,
    verificationId: state.auth.emailConfirm.verificationId,
  }),
  (dispatch, { match }) => ({
    onChangeCode: value => dispatch(change('code', value)),
    onChangeVerificationId: value => dispatch(change('verificationId', value)),
    onConfirm: () => dispatch(verify()),
    onVerify: () => dispatch(accountVerify(match.params)),
  }),
)(enhance(EmailConfirm))
