import { Component } from 'react'
import { connect } from 'react-redux'
import { init, clear } from '../actions/init'

class Preload extends Component {
  componentDidMount() {
    const { token, onInit, onMain } = this.props

    if (!!token) { // eslint-disable-line no-extra-boolean-cast
      onInit()
    }

    if (token && /^\/auth/.test(window.location.pathname)) {
      onMain()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { token, onMain, onInit, onAuth } = this.props

    if (!token && nextProps.token) {
      onMain()
      onInit()
    }

    if (token && !nextProps.token) {
      onAuth()
    }
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default connect(
  state => ({
    token: state.security.token,
  }),
  (dispatch, { history }) => ({
    onInit: () => dispatch(init()),
    onAuth: () => dispatch(clear()),
    onMain: () => history.replace('/'),
  }),
)(Preload)
