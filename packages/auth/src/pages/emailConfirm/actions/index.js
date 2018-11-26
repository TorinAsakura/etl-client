import gql from 'graphql-tag'
import { login } from '@er/common/src/actions/security'
import * as actions from '../constants'


export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const verify = () => async (dispatch, getState, client) => {
  const { code, verificationId } = getState().auth.emailConfirm

  const { data } = await client.mutate({
    mutation: gql`
      mutation createAccountVerify ($input: CreateAccountVerifyInput!) {
        createAccountVerify (input: $input) {
          token {
            token,
            expiresIn,
          },
          errors {
            verificationId,
            code,
          },
        },
      },
    `,
    variables: {
      input: {
        verificationId,
        code,
      },
    },
  })

  if (data.createAccountVerify.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createAccountVerify.errors,
    })
  } else {
    dispatch(login(data.createAccountVerify.token))

    dispatch({
      type: actions.clear,
    })
  }
}

export const accountVerify = ({ verificationId, code }) => async (dispatch, getState, client, history) => {
  const { data } = await client.mutate({
    mutation: gql`
      mutation ($input: CreateAccountVerifyInput!) {
        createAccountVerify (input: $input) {
          token {
            token,
            expiresIn,
          },
          errors {
            verificationId,
            code,
          },
        },
      },
    `,
    variables: {
      input: {
        verificationId,
        code,
      },
    },
  })

  if (data.createAccountVerify.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createAccountVerify.errors,
    })
  } else {
    dispatch(login(data.createAccountVerify.token))

    dispatch({
      type: actions.clear,
    })
  }
}
