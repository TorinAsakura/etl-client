import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import Protection from '../../components/desktop/Protection'
import { change, getPrivateKey, enablePrivateKey } from '../../actions/protection'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },

})

export default connect(
  state => ({
    privateKey: state.profile.protection.privateKey,
    privateKeyLink: state.profile.protection.privateKeyLink,
    authCode: state.profile.protection.authCode,
    twoFAuth: state.profile.protection.twoFAuth,
    typeOfSuspension: state.profile.protection.typeOfSuspension,
    typeOfSuspensionOptions: state.profile.protection.typeOfSuspensionOptions,
    suspensionPeriod: state.profile.protection.suspensionPeriod,
  }),
  dispatch => ({
    onChangeAuthCode: value => dispatch(change('authCode', value)),
    onChangeTypeOfSuspension: value => dispatch(change('typeOfSuspension', value)),
    onChangeSuspensionPeriod: value => dispatch(change('suspensionPeriod', value)),
    onTurnOn2FA: () => dispatch(enablePrivateKey()),
    onLoad: () => dispatch(getPrivateKey()),
  }),
)(enhance(Protection))
