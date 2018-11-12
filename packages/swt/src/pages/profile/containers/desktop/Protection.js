import { connect } from 'react-redux'
import Protection from '../../components/desktop/Protection'
import { change } from '../../actions/protection'

export default connect(
  state => ({
    privateKey: state.profile.protection.privateKey,
    authCode: state.profile.protection.authCode,
    twoFAuth: state.profile.protection.twoFAuth,
    typeOfSuspension: state.profile.protection.typeOfSuspension,
    suspensionPeriod: state.profile.protection.suspensionPeriod,
    suspensionPeriodOptions: state.profile.protection.suspensionPeriodOptions,
  }),
  dispatch => ({
    onChangeAuthCode: value => dispatch(change('authCode', value)),
    onChangeTypeOfSuspension: value => dispatch(change('typeOfSuspension', value)),
    onChangeSuspensionPeriod: value => dispatch(change('suspensionPeriod', value)),
    onChangeTwoFAuth: value => dispatch(change('twoFAuth', value)),
  }),
)(Protection)
