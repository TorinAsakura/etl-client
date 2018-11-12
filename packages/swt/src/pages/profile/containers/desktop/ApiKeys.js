import { connect } from 'react-redux'
import ApiKeys from '../../components/desktop/ApiKeys'

export default connect(
  state => ({
    apiKey: state.profile.apiKeys.apiKey,
    apiSecret: state.profile.apiKeys.apiSecret,
  }),
)(ApiKeys)
