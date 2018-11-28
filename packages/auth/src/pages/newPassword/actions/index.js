import gql from 'graphql-tag'
import { login } from '@er/common/src/actions/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const verifyResetPassword = ({ verificationId, code }) => async (dispatch, getState, client) => {
  const { password, confirmPassword } = getState().auth.newPassword

  const { data } = await client.mutate({
    mutation: gql`
      mutation verifyResetPassword($input: VerifyResetPassword!) {
        verifyResetPassword(input: $input) {
          token {
            token,
            expiresIn,
          },
          errors {
            code,
            confirmation,
            value,
            verificationId,
          }
        },
      },
    `,
    variables: {
      input: {
        code,
        confirmation: confirmPassword,
        value: password,
        verificationId,
      },
    },
  })

  if (data.verifyResetPassword.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.verifyResetPassword.errors,
    })
    setTimeout(() =>
      dispatch({
        type: actions.setErrors,
        errors: {},
      }), 570)
  } else {
    dispatch(login(data.verifyResetPassword.token))

    dispatch({
      type: actions.clear,
    })
  }
}
