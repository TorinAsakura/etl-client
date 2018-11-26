import { connect } from 'react-redux'
import { change } from '../../actions/profile'
import Profile from '../../components/mobile/Profile'

export default connect(
  state => ({
    currentPassword: state.profile.profile.currentPassword,
    newPassword: state.profile.profile.newPassword,
    confirmPassword: state.profile.profile.confirmPassword,
    email: state.profile.profile.email,
    accountState: state.profile.profile.accountState,
    data: state.profile.profile.data,
  }),
  dispatch => ({
    onChangeCurrentPassword: value => dispatch(change('currentPassword', value)),
    onChangeNewPassword: value => dispatch(change('newPassword', value)),
    onChangeConfirmPassword: value => dispatch(change('confirmPassword', value)),
    onChangePassword: () => console.log('change password'),
  }),
)(Profile)
