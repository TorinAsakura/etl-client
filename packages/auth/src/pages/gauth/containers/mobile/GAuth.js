import { connect } from 'react-redux'
import GAuth from '../../components/mobile/GAuth'
import { change } from '../../actions'

export default connect(
  state => ({
    password: state.auth.gauth.password,
  }),
  dispatch => ({
    onChangePassword: value => dispatch(change('password', value)),
  }),
)(GAuth)
