import gql from 'graphql-tag'
import { login } from '@er/common/src/actions/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const signin = () => async (dispatch, getState, client, history) => {
  const { username, password } = getState().auth.login

  const { data } = await client.query({
    query: gql`
      query signin ($email: String!, $password: String!) {
        signin (email: $email, password: $password) {
          token {
            token,
            expiresIn,
          },
          verificationId,
          verifyMethod,
          errors {
            email,
            password,
          },
        },
      },
    `,
    variables: {
      email: username,
      password,
    },
  })

  if (data.signin.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.signin.errors,
    })
    setTimeout(() =>
      dispatch({
        type: actions.setErrors,
        errors: {},
      }), 570)
  } else if (data.signin.token) {
    dispatch(login(data.signin.token))
  } else {
    dispatch({
      type: actions.change,
      field: 'verificationId',
      value: data.signin.verificationId,
    })

    history.push('/auth/gauth')
  }
}
