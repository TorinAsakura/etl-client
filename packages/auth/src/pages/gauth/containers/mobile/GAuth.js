import { connect } from 'react-redux'
import GAuth from '../../components/mobile/GAuth'
import { change, signinVerify } from '../../actions'

export default connect(
  state => ({
    code: state.auth.gauth.code,
  }),
  dispatch => ({
    onChangeCode: value => dispatch(change('code', value)),
    onConfirmCode: () => dispatch(signinVerify()),
  }),
)(GAuth)
