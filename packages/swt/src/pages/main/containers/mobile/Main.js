import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import Main from '../../components/mobile/Main'
import {
  change,
  closeSocket,
  initSocket,
} from '../../actions'

const enhance = lifecycle({
  componentWillMount() {
    const { onOpenSocket } = this.props
    onOpenSocket()
  },
  componentWillUnmount() {
    const { onCloseSocket } = this.props
    onCloseSocket()
  },

})

export default connect(
  state => ({
    toggle: state.main.toggle,
    tab: state.main.tab,
    amount: state.main.amount,
    orders: state.main.orders,
  }),
  dispatch => ({
    onChangeToggle: value => dispatch(change('toggle', value)),
    onChangeTab: value => dispatch(change('tab', value)),
    onChangeAmount: value => dispatch(change('amount', value)),
    onOpenSocket: () => dispatch(initSocket()),
    onCloseSocket: () => dispatch(closeSocket()),

  }),
)(enhance(Main))
