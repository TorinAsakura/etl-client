import { createReducer } from '@er/utils'

const initialState = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? `${window.location.origin.replace('www.', '').replace('ws.', 'gateway.')}/graphql`
    : (process.env.API_URL || 'http://localhost:3000'),
}

export default createReducer(initialState, {})
