import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import Header from './Header'

const App = ({
  children,
}) => (
  <Column fill>
    <Layout basis='64px'>
      <Header />
    </Layout>
    <Layout justify='center'>
      {children}
    </Layout>
  </Column>
)

export default injectIntl(App)
