import { connect } from 'react-redux'
import Login from '../../components/desktop/Login'

export default connect(
  () => ({}),
  (dispatch, { history }) => ({
    onLogin: () => history.push('/'),
  }),
)(Login)
