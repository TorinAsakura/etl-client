import React from 'react'
import { Link } from 'react-router-dom'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Logo } from '@er/ui/src/logo'
import { Footer } from '@er/ui/src/footer'

const App = ({ children }) => (
  <Block
    color='blue'
    height='fill'
  >
    <Column
      align='center'
      fill
    >
      <Layout basis='64px' />
      <Layout>
        <Link
          to='/auth'
        >
          <Logo color='white' fontColor='white' />
        </Link>
      </Layout>
      <Layout basis='64px' />
      <Layout>
        <Row justify='center'>
          {children}
        </Row>
      </Layout>
      <Layout basis='75px' grow={1} />
      <Layout>
        <Footer />
      </Layout>
    </Column>
  </Block>
)

export default App
