import React from 'react'
import { Column, Layout } from 'flex-layouts'
import Header from './Header'

const App = ({ children }) => (
  <Column fill>
    <Layout basis='64px'>
      <Header />
    </Layout>
    <Layout basis='4px' />
    <Layout justify='center'>
      {children}
    </Layout>
  </Column>
)

export default App
