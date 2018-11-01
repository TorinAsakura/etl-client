import { connect } from 'react-redux'
import Main from '../../components/desktop/Main'
import { change } from '../../actions'

export default connect(
  state => ({
    activeTab: state.main.activeTab,
    amount: state.main.amount,
  }),
  dispatch => ({
    onChangeActiveTab: value => dispatch(change('activeTab', value)),
    onChangeAmount: value => dispatch(change('amount', value)),
  }),
)(Main)
