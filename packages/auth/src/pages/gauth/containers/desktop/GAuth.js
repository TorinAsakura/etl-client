import { connect } from 'react-redux'
import GAuth from '../../components/desktop/GAuth'
import { change } from '../../actions'

export default connect(
  state => ({
    password: state.auth.gauth.password,
  }),
  dispatch => ({
    onChangePassword: value => dispatch(change('password', value)),
  }),
)(GAuth)
