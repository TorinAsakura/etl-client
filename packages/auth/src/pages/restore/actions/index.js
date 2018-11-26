import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const initReset = () => async (dispatch, getState, client, history) => {
  const { email } = getState().auth.restore

  const { data } = await client.mutate({
    mutation: gql`
      mutation initiateResetPassword($input: InitiateResetPasswordInput!) {
        initiateResetPassword(input: $input) {
          verificationId,
          errors {
            email,
          },
        },
      },
    `,
    variables: {
      input: {
        email,
      },
    },
  })

  if (data.initiateResetPassword.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.initiateResetPassword.errors,
    })
  } else {
    history.push('/auth/restore/success')

    dispatch({
      type: actions.clear,
    })
  }
}
