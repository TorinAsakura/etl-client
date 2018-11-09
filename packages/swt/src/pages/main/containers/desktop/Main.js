import { connect } from 'react-redux'
import Main from '../../components/desktop/Main'
import { change } from '../../actions'

export default connect(
  state => ({
    toggle: state.main.toggle,
    tab: state.main.tab,
    amount: state.main.amount,
  }),
  dispatch => ({
    onChangeToggle: value => dispatch(change('toggle', value)),
    onChangeTab: value => dispatch(change('tab', value)),
    onChangeAmount: value => dispatch(change('amount', value)),
  }),
)(Main)
