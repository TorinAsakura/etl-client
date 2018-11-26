import gql from 'graphql-tag'
import { login } from '@er/common/src/actions/security'
import * as actions from '../constants'


export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const signinVerify = () => async (dispatch, getState, client) => {
  const { verificationId } = getState().auth.login
  const { code } = getState().auth.gauth

  const { data } = await client.query({
    query: gql`
      query signinVerify ($code: String!, $verificationId: String!) {
        signinVerify (code: $code, verificationId: $verificationId) {
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
      verificationId,
      code,
    },
  })

  if (data.signinVerify.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.signinVerify.errors,
    })
  } else {
    dispatch(login(data.signinVerify.token))

    dispatch({
      type: actions.clear,
    })
  }
}
