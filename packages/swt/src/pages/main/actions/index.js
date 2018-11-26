import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})


export const initSocket = (pair = 'xrp_btc') => async (dispatch) => {
  window.socket = new WebSocket(`wss://orders.arbidex.org:5678/subscribe?pair=${pair}`)

  window.socket.addEventListener('message', (message) => {
    dispatch({
      type: actions.getOrders,
      data: JSON.parse(message.data).orders[pair],
    })
  })
}

export const closeSocket = () => async () => {
  window.socket.onclose = () => {
    window.socket.removeEventListener('message', () => {})
  }
  window.socket.close()
}
