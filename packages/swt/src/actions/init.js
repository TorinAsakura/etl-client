import gql from 'graphql-tag'
import * as actions from '../constants/init'

export const init = () => async (dispatch, getState, client) => {
  const { data } = await client.query({
    query: gql`
      query me {
        me {
          id,
          role {
            id,
            name,
          },
          user {
            id,
            login,
            email,
            verifyMethod,
          },
        },
      },
    `,
  })

  dispatch({
    type: actions.loadUser,
    user: data.me,
  })
}

export const clear = () => (dispatch, getState, client, history) => {
  history.push('/auth')

  dispatch({
    type: actions.clearUser,
  })
}
