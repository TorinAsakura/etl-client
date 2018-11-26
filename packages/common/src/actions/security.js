import * as actions from '../constants/security'

export const login = ({ token, expiresIn }) => ({
  type: actions.login,
  token,
  expiresIn,
})

export const logout = () => ({
  type: actions.logout,
})
