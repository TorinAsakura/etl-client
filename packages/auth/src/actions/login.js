import gql from 'graphql-tag'
import { auth } from '@swt/common/src/constants/security'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const retry = () => ({
  type: actions.setErrors,
  errors: {},
})

export const checkEmail = () => async (dispatch, getState, client, history) => {
  const { email } = getState().auth.login

  const { data } = await client.query({
    fetchPolicy: 'network-only',
    query: gql`
      query Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          errors {
            email
          }
        }
      }
    `,
    variables: {
      password: '',
      email,
    },
  })

if (data.login.errors && data.login.errors.email) {
  dispatch({
    type: actions.setErrors,
    errors: data.login.errors,
  })
} else {
  history.push('/auth/password')
}
}

export const login = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.login

const { data } = await client.query({
  fetchPolicy: 'network-only',
  query: gql`
    query Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token {
          token
          expiresIn
        }
        errors {
          email
          password
        }
      }
    }
  `,
  variables: {
    password,
    email,
  },
})

if (data.login.errors) {
  dispatch({
    type: actions.setErrors,
    errors: data.login.errors,
  })
} else {
  dispatch({
    type: auth,
    token: data.login.token.token,
    expiresIn: data.login.token.expiresIn,
  })

  dispatch({
    type: actions.clear,
  })
}
}
