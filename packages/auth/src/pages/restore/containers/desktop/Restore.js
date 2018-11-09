import { connect } from 'react-redux'
import Restore from '../../components/desktop/Restore'
import { change } from '../../actions'

export default connect(
  state => ({
    email: state.auth.restore.email,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
  }),
)(Restore)
