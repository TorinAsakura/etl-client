import { connect } from 'react-redux'
import Orders from '../../components/mobile/Orders'

export default connect(
  state => ({
    openOrders: state.profile.orders.openOrders,
    tradeHistory: state.profile.orders.tradeHistory,
  }),
)(Orders)
