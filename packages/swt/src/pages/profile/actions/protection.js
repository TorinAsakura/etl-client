import gql from 'graphql-tag'
import * as actions from '../constants/protection'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const getPrivateKey = () => async (dispatch, getState, client) => {
  if (!getState().profile.protection.twoFAuth) {
    const { data } = await client.mutate({
      mutation: gql`
      mutation enable2fa {
        enable2fa {
          totpUri,
          verificationId,
          secret,
        },
      },
    `,
    })

    dispatch({
      type: actions.change,
      field: 'privateKey',
      value: data.enable2fa.secret,
    })

    dispatch({
      type: actions.change,
      field: 'privateKeyLink',
      value: data.enable2fa.totpUri,
    })

    dispatch({
      type: actions.change,
      field: 'verificationId',
      value: data.enable2fa.verificationId,
    })
  }
}

export const enablePrivateKey = () => async (dispatch, getState, client) => {
  const { authCode, verificationId } = getState().profile.protection

  const { data } = await client.mutate({
    mutation: gql`
      mutation enable2faVerify ($input: VerifyInput!) {
        enable2faVerify (input: $input) {
          result
          errors {
            code
            verificationId
          }
        }
      }
    `,
    variables: {
      input: {
        verificationId,
        code: authCode,
      },
    },
  })

  if (data.enable2faVerify.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.enable2faVerify.errors,
    })
  } else {
    dispatch({
      type: actions.change,
      field: 'twoFAuth',
      value: true,
    })
  }
}
