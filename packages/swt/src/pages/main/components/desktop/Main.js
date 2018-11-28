import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Block } from '@er/ui/src/content'
import { Footer } from '@er/ui/src/footer'
import Cards from './Cards'

const Main = ({
  match,
}) => (
  <Block
    color='gray1200'
  >
    <Column align='center'>
      <Layout basis='32px' />
      <Layout>
        <Cards
          match={match}
        />
      </Layout>
      <Layout basis='75px' grow={1} />
      <Layout>
        <Footer />
      </Layout>
    </Column>
  </Block>
)
export default Main
