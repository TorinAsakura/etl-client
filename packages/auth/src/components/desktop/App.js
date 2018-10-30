import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from '@swt/ui/src/content'
import { Auth as BaseAuth } from '@swt/ui/src/auth'
import Header from './Header'

const App = ({ children }) => (
  <BaseAuth>
    <Block transparent>
      <Column>
        <Layout>
          <Header />
        </Layout>
        <Layout basis='24px' />
        <Layout>
          <Row justify='center'>
            <Layout basis='340px'>{children}</Layout>
          </Row>
        </Layout>
      </Column>
    </Block>
  </BaseAuth>
)

export default App
