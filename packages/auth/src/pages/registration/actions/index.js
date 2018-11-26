import gql from 'graphql-tag'
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
  } else {
    history.push('/auth/registration/success')

    dispatch({
      type: actions.clear,
    })
  }
}
