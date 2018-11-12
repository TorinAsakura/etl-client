import { connect } from 'react-redux'
import Balances from '../../components/desktop/Balances'

export default connect(
  state => ({
    balance: state.profile.balances.balance,
    history: state.profile.balances.history,
  }),
)(Balances)
