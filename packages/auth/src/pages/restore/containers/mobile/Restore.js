import { connect } from 'react-redux'
import Restore from '../../components/mobile/Restore'
import {
  change,
  initReset,
} from '../../actions'

export default connect(
  state => ({
    email: state.auth.restore.email,
    errors: state.auth.restore.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onRestore: () => dispatch(initReset()),
  }),
)(Restore)
