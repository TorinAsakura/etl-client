import gql from 'graphql-tag'
import { login } from '@er/common/src/actions/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client, history) => {
  const {
    username,
    email,
    password,
    confirmPassword,
  } = getState().auth.registration

  const { data } = await client.mutate({
    mutation: gql`
      mutation createTrader ($input: CreateAccountInput!) {
        createAccount (input: $input) {
          result {
            id,
            role {
              id,
              name,
            },
            user {
              id,
              login,
              email,
            }
          }
          errors {
            email,
            login,
            password,
          }
        }
      },
    `,
    variables: {
      input: {
        login: username,
        email,
        password,
        confirmPassword,
      },
    },
  })

  if (data.createAccount.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.createAccount.errors,
    })
    setTimeout(() =>
      dispatch({
        type: actions.setErrors,
        errors: {},
      }), 570)
  } else {
    history.push('/auth/registration/success')

    dispatch({
      type: actions.clear,
    })
  }
}


export const accountVerify = ({ verificationId, code }) => async (dispatch, getState, client) => {
  if (verificationId && code) {
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
      setTimeout(() =>
        dispatch({
          type: actions.setErrors,
          errors: {},
        }), 570)
    } else {
      dispatch(login(data.createAccountVerify.token))

      dispatch({
        type: actions.clear,
      })
    }
  }
}
