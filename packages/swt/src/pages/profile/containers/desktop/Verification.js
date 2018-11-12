import { connect } from 'react-redux'
import Verification from '../../components/desktop/Verification'
import { change } from '../../actions/verification'

export default connect(
  state => ({
    lastName: state.profile.verification.lastName,
    firstName: state.profile.verification.firstName,
    birthDate: state.profile.verification.birthDate,
    citizenship: state.profile.verification.citizenship,
    citizenshipOptions: state.profile.verification.citizenshipOptions,
    idNumber: state.profile.verification.idNumber,
    idIssueDate: state.profile.verification.idIssueDate,
    idExpireDate: state.profile.verification.idExpireDate,
    country: state.profile.verification.country,
    countryOptions: state.profile.verification.countryOptions,
    city: state.profile.verification.city,
    address: state.profile.verification.address,
    identityVerification: state.profile.verification.identityVerification,
    proofOfAddress: state.profile.verification.proofOfAddress,
    selfie: state.profile.verification.selfie,
    agree: state.profile.verification.agree,
  }),
  dispatch => ({
    onChangeLastName: value => dispatch(change('lastName', value)),
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeBirthDate: value => dispatch(change('birthDate', value)),
    onChangeCitizenship: value => dispatch(change('citizenship', value)),
    onChangeIdNumber: value => dispatch(change('idNumber', value)),
    onChangeIdIssueDate: value => dispatch(change('idIssueDate', value)),
    onChangeIdExpireDate: value => dispatch(change('idExpireDate', value)),
    onChangeCountry: value => dispatch(change('country', value)),
    onChangeCity: value => dispatch(change('city', value)),
    onChangeAddress: value => dispatch(change('address', value)),
    onChangeIdentityVerification: value => dispatch(change('identityVerification', value)),
    onChangeProofOfAddress: value => dispatch(change('proofOfAddress', value)),
    onChangeSelfie: value => dispatch(change('selfie', value)),
    onChangeAgree: value => dispatch(change('agree', value)),
  }),
)(Verification)
